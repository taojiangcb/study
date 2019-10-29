
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

export const render = (store, req) => {
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} content={{}}>
        {renderRoutes(Routers)}
      </StaticRouter>
    </Provider>
  );
  let storeData = JSON.stringify(store.getState());
  template = template.replace('$SOTRE', storeData);
  let html = template.replace('<!--content-->', content);
  console.log(html);
  return html;
}