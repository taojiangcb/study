
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