
import React from 'react';

import { StaticRouter } from 'react-router-dom';
import Routers from '../Routers';
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
  <script src="index.js"></script>
</body>
</html>
`;

export const render = (req) => {

  let content = renderToString(
    <Provider store={ssrStore()}>
      <StaticRouter location={req.path} content={{}}>
        <Header></Header>
        {Routers}
      </StaticRouter>
    </Provider>
  );
  let html = template.replace('<!--content-->', content);
  console.log(html);
  return html;
}