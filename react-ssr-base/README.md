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

### 服务器路由 staticRouter

### 同构路由
1.建立Router文件
```
import React from 'react';

import { Route } from 'react-router-dom';
import { Home } from './containers/home/Home.jsx';

export default (
    <div>
      <Route path="/" component={Home} />
    </div>
)
```

2.app.js 客户端路由
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

3.ssr/*.js 服务器端路由
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

