
import React from 'react';

import { StaticRouter } from 'react-router-dom';
import { Route } from 'react-router'
import { Routers } from '../Routers';
import { renderRoutes } from 'react-router-config';

import { renderToString } from 'react-dom/server';
import { ssrStore } from '../store/Store';
import { Provider } from 'react-redux'
import { Header } from '../components/head/Header.jsx';
import { Helmet } from 'react-helmet';

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

  const helmet = Helmet.renderStatic();
  let storeData = JSON.stringify(store.getState());
  let html = `<html lang="en">
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <style>${context.css}</style>
  </head>
  <body>
    <div id="root">${content}</div>
    <script>
      window.content = ${storeData};
    </script>
    <script src="index.js"></script>
  </body>
  </html>`
  return html;
}