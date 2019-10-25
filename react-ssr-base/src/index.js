
import React from 'react'
import express from 'express';
import { renderToString } from 'react-dom/server';
import Home from './containers/home/Home.jsx';
import env from '../config/env';

if(env.mode === env.development) {
  
}

var app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  let content = renderToString(<Home />);
  res.send(`
  <html lang="en">
  <head>
    <title>Document</title>
    </head>
    <body>
    <div id="root">${content}</div>
    <script src="/index.js"></script>
  </body>
  </html>
  `);
})

app.listen(3000, () => {
  console.log('ssr server start....');
})
