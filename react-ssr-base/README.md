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

### 环境的搭建


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


### 多级路由
 renderRouters - react-router-config

### ssr 404 处理

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

 
### SSR 样式渲染
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


   isomorphic-style-loader 和 style-loader 的区别
   isomorphic-style-loader 
