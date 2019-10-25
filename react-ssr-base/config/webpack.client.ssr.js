
var merge = require('webpack-merge');
const Paths = require('./Paths');
const path = require('path');
const HtmlPlign = require('html-webpack-plugin')

let baseConfig = require('./webpack.base');
let ssr_client = merge(baseConfig, {
  entry: {
    path: path.resolve(__dirname, '../src/client/App.js'),
  },
  
  output: {
    filename: "index.js",
    path: Paths.SSR_CLIENT,
  },
  plugins:[
    new HtmlPlign({
      template:path.resolve(__dirname,'../template/index.html'),
      title:"app title"
    })
  ]
})

module.exports = ssr_client;