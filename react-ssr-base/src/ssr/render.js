
import React from 'react';

import { StaticRouter } from 'react-router-dom';
import { Route } from 'react-router'
import { Routers } from '../Routers';
import { renderRoutes } from 'react-router-config';

import { renderToString } from 'react-dom/server';
import { ssrStore } from '../store/Store';
import { Provider } from 'react-redux'
import { Header } from '../components/head/Header.jsx';

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