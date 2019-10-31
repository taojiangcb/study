### react 客户端渲染流程
1. 浏览器发起请求
2. 服务器返回html
3. 浏览器发送bundle.js请求
4. 服务器返回bundle.js
5. 浏览器执行bundle.js 中的react 代码
   
### react ssr服务器渲染
  1. 浏览器发送请求
  2. 服务器运行React代码生成页面
  3. 服务器返回页面

   
### 同构流程
1. 服务器端运行React代码渲染出html
2. 将html 发送给 浏览器
3. 浏览器接收到内容然后展示(此时.js 没加在完成，因此没有事情绑定之类的dom操作)
4. 浏览器加载js文件
5. js中的react代码在浏览器中重新执行
6. js中的react接管了页面的所有操作
 
### 客户端路由流程
1. 服务器端返回HTML
2. 发送HTML给浏览器
3. 浏览器接收到内容展示
4. 浏览器加载js文件
5. JS中的React代码接管页面的操作
6. js代码拿到浏览器是的地址
7. js大妈根据地址返回不同的路由内容

### 项目结构
```
  config  //目录
    - api-dev-server.mjs    api server 服务
    - env.js                环境变量定义
    - Paths.js              目录的定义
    - webpack.base.js       编译的基本配置
    - webpack.client.js     客户端编译的配置
    - webpack.server.js     服务端编译的配置
  dist    ssr 服务端输出的目录
  public  ssr 客户端端输出的目录
  src 源代码
    - api 
      - API.js          api服务接口的定义
      - HomeList.js     接口测试数据
      - TranslateList   接口测试数据
    - client  
      App.js            ssr 编译客户端的入口
    - components        公共组件
      - header
      - translatelist
    - containers        页面级组件
      - home
      - login
      - notfund         404 页面
    - ssr       
      - index           ssr 服务端入口
      - Render          服务端渲染处理
    - sotre             redux 数据域
      - Action.*.js     各个模块 reducer 消息传递是处理 先关的业务处理
      - Reducer.*.js    redux 的数据更新处理，接收到对应 action 更新业务
      - Store.js        redux 的入口 Provider 组件数据源
      - ActionConst.js  数据流穿透消息的名称定义
    - RouteApp.js       客户端 & 服务端 路由入口
    - Routers.js        客户端 & 服务端 共用的路由数据
```

### 环境 & 模块的搭建
模块预设注意事项
  1. 客户端入口&服务端入口分离
  2. 路由组件的数据公共
  3. store 数据入口分离 客户端 & 服务端
  4. 页面组件公共使用

环境搭建
  1. webapck 拆分服务端和客户端编译
     1. "dev:build:server": "webpack --mode development --config ./config/webpack.server.ssr.js --watch",
     2. "dev:build:client": "webpack --mode development --config ./config/webpack.client.ssr.js --watch"
  2. ssr 服务指定 client 的目录入口 app.use(express.static('public'));
  3. ssr 服务开发是监测刷新重启
     1. "dev:ssr:start": "nodemon --watch dist --exec node ./dist/bundle-ssr.js",
  4. 监测api服务开发刷新
     1. "dev:api:dev": "nodemon --watch config --exec babel-node ./config/api-dev-server.mjs",
  5. 合并命令执行
     1. "dev": "npm-run-all --parallel dev:**",


### SSR 同构路由 

1. 服务器端要使用 StaticRouter 对象为路由根级
2. 客户端路由为BrowserRouter 为根级别
3. 路由节点可以单独抽出来 Route为路由节点

Router.js 为共享的路由节点
App.js 存放客户端路由
Redner.js 存放服务端路由
  - StateRouter 
    - localtion 必须配置 这里指向 req.path 客户传上来的路径
    - content = {{}} 必须配置

1.建立Router文件
```
import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './containers/home/Home.jsx';
import { Login } from './containers/login/Login.jsx';


export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
  </div>
)
```

2.app.js 建立客户端路由
```
import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Routers from "../Routers"

const App = () => {
  return (
    <BrowserRouter>
      {Routers}
    </BrowserRouter>
  )
}

ReactDom.hydrate(<App />, document.getElementById("root"));
```

3.ssr/*.js 建立服务端路由
```
1.render.js

import React from 'react';

import { StaticRouter } from 'react-router-dom';
import Routers from '../Routers';
import { renderToString } from 'react-dom/server';
import { Home } from '../containers/home/Home.jsx';

let template = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="root"><!--content--></div>
  <script src="index.js"></script>
</body>
</html>
`;

export const render = (req) => {
  console.log('11111');
  let content = renderToString(
    <StaticRouter location={req.path} content={{}}>
      {Routers}
    </StaticRouter>
  );
  let html = template.replace('<!--content-->', content);
  console.log(html);
  return html;
}

2.index.js
import express from 'express';
import { render } from './render';

var app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  let html = render(req);
  res.send(html);
})

app.listen(3000, () => { console.log('ssr server start....'); })

```

### 同构是时候引用 Redux 
```
1.redux的目录结构
  /root
    ./store
       ./Store.js         数据的跟节点
       ./Reducer.js       每个模块的数据 & 数据穿透的业务逻辑处理
       ./ActionConst.js   消息穿透的名称常量

1.Store.js 负责构建整理的 redux 模块
    1.中间件的使用  redux-thunk
    2.调试工具的 redux-tool 的配置
    3.构建全局的 reducer 

2.Reducer.js
  1.将各个模块的 数据业务进行整合 
  2.数据模块的业务的更新操作

各个模块目录下面分别
  ./store
    ./Reducer.module.js   对应模块的 Reducer 业务更新处理
    ./Action.module.js    对应模块的 Reducer 的action 穿透处理

```

### 服务器端渲染
1.每个路由度需要一个dataLoad 指定数据路由初始化数据相关的入口
2.将相关的数据扔给reducer，
  1.reducer 会返回对应axios的promises
  2.reducer 处理完成之后会填充对应的数据
3.当所有的promises处理完成之后将store 丢给 render 渲染
4.在服务端render的时候需要将数据接口都注水到 page的window 对象
```
  <script>
    window.content = JSON.stringify(Data);
  </script>
```
5.在页面初始化reducer的时候进行脱水操作
```
/sotre/Store.js
//客户端获取的store
export const clientStore = () => {
    let defaultState = window.content;
    let composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducer,defaultState, composeEnhancers(
        applyMiddleware(thunk)
    ))
};
```

修改要点:
1.修改Routers.js
```
import Home, { loadHomeData } from './containers/home/Home.jsx';
import { Login } from './containers/login/Login.jsx';

export const Routers = [
  {
    path: '/',
    component: Home,
    exact:true,
    loadData: loadHomeData,
    key: "home"
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    key: "login"
  }
]
```

2.修改客户端路由
```
const App = () => (
  <Provider store={clientStore()}>
    <BrowserRouter>
      <Header></Header>
      {
        Routers.map(route=>{
          return <Route {...route}/>
        })
      }
    </BrowserRouter>
  </Provider>
)
```

3.修改ssr服务端路由
```
let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} content={{}}>
        <Header></Header>
        {
          Routers.map(route => { return <Route {...route} /> })
        }
      </StaticRouter>
    </Provider>
  );
```

4.修改store.js ssr服务的store和client的store拆分

```
//客户端获取的store
export const clientStore = () => {
    //客户的store 这个进行脱水处理，服务端在ssr渲染的时候已经把数据注水到页面中，为吧避免重刷所以这里把数据注入的reducer中
    let defaultState = window.content;
    let composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducer,defaultState, composeEnhancers(
        applyMiddleware(thunk)
    ))
};

//服务端获取的store
export const ssrStore = () => {
    let composeEnhancers = compose;
    return createStore(reducer, composeEnhancers(
        applyMiddleware(thunk)
    ))
}
```

5.render.js 已经在上面提及过。在渲染index的时候，把数据注入到window.content中。
 ```
 let template = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="root"><!--content--></div>
  <script>
    //渲染的时候注入数据
    window.content = $SOTRE;
  </script>
  <script src="index.js"></script>
</body>
</html>
`;

export const render = (store, req) => {

  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} content={{}}>
        <Header></Header>
        {
          Routers.map(route => { return <Route {...route} /> })
        }
      </StaticRouter>
    </Provider>
  );
  let storeData = JSON.stringify(store.getState());
  template = template.replace('$SOTRE', storeData);
  let html = template.replace('<!--content-->', content);
  console.log(html);
  return html;
 ```

### axios 的instance 的使用

1. 使用场景
   1. 在请求时需要独特的配置 
   

API.js
```
  import axios from 'axios';
  let API_HOST = "http://localhost:3010";

  export const API = {
    GET_HOME_LIST: '/api/get_home_list',
    LOGIN:'/api/login',
    LOGOUT:'/api/logout',
    TRANSLATE:"/api/translate",
    IS_LOGIN:"/api/isLogin"
  }

  export const apiInstance = axios.create({
    baseURL:API_HOST
  })

```

### 多级路由
 renderRouters - react-router-config

### ssr服务器处理 404 处理
```
1. 定义服务器路由的穿透参数
  //定义服务器的路由渲染的穿透参数
  let context = {};
  let html = render(store, req, context);

  export const render = (store, req, context) => {
  let content = renderToString(
    <Provider store={store}>
      //指定当前路由的路径和路由的穿透参数 
      //context 穿透参数 贯穿整个路由的组件
      //localtion 当前路由的路径
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routers)}
      </StaticRouter>
    </Provider>
  );
  ......some code
  });

2.定义404 组件
  export class NotFund extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    this.props.staticContext && (this.props.staticContext.NOT_FUND = true)
    return (
      <div>
        Not Fund page 404
      </div>
    )
  }
}
3. 在组件里标记 路由穿透参数 context 是否都了404
  FoundPage.jsx
  render() {
    //this.props.staticContext 只有在服务器渲染时候才会有 staticContext
    //这个参数来自于 staticRouter 服务器路由的穿透参数
    this.props.staticContext && (this.props.staticContext.NOT_FUND = true)
  }

4.在路由数据源中插入 404 组件
  export const Routers = [
  {
    path: "/",
    component: AppRouters,
    key: "home",
    loadData: AppRouters.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: loadHomeData,
        key: "home"
      },
      {
        path: "/login",
        exact: true,
        component: Login,
        key: "login"
      },
      {
        component:NotFund,    //404 组件
      }
    ]
  },
)
5.路由数据的使用方式 renderRoutes 的使用
  1.客户端 App.js
    import { renderRoutes } from 'react-router-config';
    const App = () => (
    <Provider store={clientStore()}>
      <BrowserRouter>
        {renderRoutes(Routers)}
      </BrowserRouter>
    </Provider>
    render(<App />, document.getElementById("root"));

  2.服务端 render.js
    import { renderRoutes } from 'react-router-config';
    let content = renderToString(
    <Provider store={store}>
      //指定当前路由的路径和路由的穿透参数 
      //context 穿透参数 贯穿整个路由的组件
      //localtion 当前路由的路径
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routers)}
      </StaticRouter>
    </Provider>
  );

  3.路由入口 / 路径组件 AppRouters
    import { renderRoutes } from 'react-router-config';
    export const AppRouters = (props) => {
    return (
      <div>
        <Header></Header>
        { renderRoutes(props.route.routes) }
      </div>
    )
  }

  AppRouters.loadData = (store)=> {
    return store.dispatch(onIsLogin());
  }


]
```

### ssr 301 处理 
StaticRouter 内容已经处理了301重定向内容，只要内部内容走到 Redictor 就会在 staticContext内容塞入{action:'REPLACE',url:重定向的地址} 所以只要在最完层处理就好了
```
 let context = {};
      let html = render(store, req, context);
      if(context.action === 'REPLACT') {
        res.redirect(301,context.url);
      }
      else if(context.NOT_FUND) {
        res.status(404);
      }
      res.send(html);
```

### promise 请求失败的时候处理
```
matchedRouters.forEach(item => {
    if (item.route.loadData) {
      //数据转载的时候容错处理，不管接口是否请求成功，最后都要进行渲染，失败的接口最多不显示内容而已。
      let promise = new Promise((resolve, reject) => {
        item.route.loadData(store)
          .then(resolve)
          .catch(resolve)
      });
      promisess.push(promise);
    }
  });
```

### SSR 样式渲染
index.css
```
body {
  background-color: green;
}

.test {
  background-color:red;
}
```
操作方式
```
  1.在css引入的模块里 导入css
  Home.jsx 里导入 import style from './index.css';
  render() {
      //将样式传出去，用于服务器渲染
      //staticContent 是 staticRouter 路由的穿透对象，所有路由组件都可以获取到
      if(this.props.staticContext) {
        this.props.staticContext.css = style._getCss();
      }
  }
  2.相关的dom上面绑定 css 样式名称
    <div className={style.test}></div>

  3.将样式插入到服务器渲染的temple中
    let template = `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <style><!--css--></style>
    </head>
    <body>
      <div id="root"><!--content--></div>
      <script>
        window.content = $SOTRE;
      </script>
      <script src="index.js"></script>
    </body>
    </html>
    `;

    export const render = (store, req, context) => {
      let content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            {renderRoutes(Routers)}
          </StaticRouter>
        </Provider>
      );
      let storeData = JSON.stringify(store.getState());
      //插入服务样式
      template = template.replace('<!--css-->',context.css);
      //注水服务获取到的 api 数据
      template = template.replace('$SOTRE', storeData);
      //服务器渲染的组件插入
      let html = template.replace('<!--content-->', content);
      console.log(html);
      return html;
    }

```

  1. 客户端使用 style-loader css-loader
   ```
   module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            }
          }
        ]
      }
    ]
  },
 ```
  1. 服务端使用 isomorphic-style-loader 
   ```
   module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'isomorphic-style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          }
        ]
      }
    ]
  },
   ```
#### css-loader原理
 css 文件被转成js 文件，css-loader可以按照一定的规则将类名等转化成具有全局唯一性的名字。即使2个文件中都有叫root的类名，经css-loader转换后，它们的类名可以完全不同，这就是css的模块化。
模块化以后，用户完全不知道被转换后的类名，这样就没法使用了。为了让用户知道类名，css-loader就需要对转换后的内容做些改变。css-loader实际转换后的内容等价于如下伪代码:
```
module.exports = {
	toString: () => “原css文件中的样式(类名被转换了，代码可能也被压缩过)”
	locals: {
		[原文件中写的类名等]: “被转换后的实际类名等”
	}
}
```
这样通过其中的locals对象，就很容易知道被转换后的类名了。举个例子，假设css原文件中有个类名为home，导入该css文件时用变量s接收，s.locals.home的值就是被转换后的类名了。

##### style-loader原理
有了css-loader，style-loader的实现就很简单了。先通过css-loader把css文件转换成一个对象，假设叫content，该对象就是上面css-loader转换css文件后导出的对象。然后简单粗暴的通过DOM操作将content中的样式插入到style标签中。最后将content.locals导出，方便用户使用类名、动画名等。同时经过css-loader和style-loader转换后的内容可以用如下伪代码表示：
```
var content = 【css-loader转换css文件后的结果】;
addStylesToDom(content.toString());
module.exports = content.locals;
```
#### isomorphic-style-loader原理
我们知道了style-loader的原理，它很简单，但又很粗暴。粗暴的是，直接将样式通过DOM操作进行插入。对于浏览器环境则很好，很方便，不需要用户干预。但是对于node环境，这就没法愉快的玩耍了。node环境需要的是将样式插入到动态生成的html字符串中，而不是进行DOM操作。这时就需要用到isomorphic-style-loader，而不是style-loader。
  isomorphic-style-loader没有像style-loader那样直接进行DOM操作，而是导出了一些辅助方法，让用户依据实际情况来调用不同的方法。同时经过css-loader和isomorphic-style-loader转换后的内容可以用如下伪代码表示
```
var content = 【css-loader转换css文件后的结果】;
// 方便用户使用类名等
exports = module.exports = content.locals || {}; 
exports._getContent = () => content;
// 方便用户获取样式
exports._getCss = () => context.toString();	
// 方便用户将样式插入到DOM中
exports._insertCss = 【作用同上面的addStylesToDom】;
```

从如上伪代码可以看出，isomorphic-style-loader主要是导出了2个函数，_getCss和_insertCss。让用户根据实际环境来调用，而不是像style-loader那样。在浏览器环境中就可以调用_insertCss(_getCss())来将样式插入到DOM中；在node环境中就不能调用_insertCss，但能调用_getCss获取样式字符串，根据实际需求来使用。

### Seach engine optimization  SEO 优化
```
1 Title & Descript 的真正使用 (全文所有)
  Title        网站名称
  Description  提升网站的转化率

2 字媒体
  1 原创
  2 连接
     内部链接   (内容相关)
     外部链接   跳转当前网站
  
React-helmet (提升网站优化) 定制每个页面的 description
  <Fragment>
    <Helmet>
      <title></title>
      <meta name="description" content="转化描述">
    </Helment>
    <......some code>
  </Fragment>

```

### 在服务器端进行 渲染的时候 使用 helmet 进行seo的优化
```
import { Helmet } from 'react-helmet';
export const render = (store, req, context) => {
    let content = renderToString()
    const helmet = Helmet.renderStatic();
    let html = `<html lang="en">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <style>${context.css}</style>
    </head>
    ...`
}
```

### ssr 缺点
  1. 服务器成本压力大
  2. 开发debug 成本高
  3. bug有定位有3端排查  react node api 
  
### 预渲染
```
  1. prerender 工具
  2. prerender 服务是单独给 seo 爬虫使用的
  3. prerender 的原理是 当爬虫进入网站的时候 会模拟一个 浏览器 去获取读取 react 网站的内容，生成一个 html 返回一个 seo
  4. https://www.prerender.is

预渲染架构
    - user -> nginx -> react-server -> user
    - seo -> nginx -> prerender -> react-server -> seo
 ```
