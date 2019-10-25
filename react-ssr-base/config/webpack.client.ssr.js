
var merge = require('webpack-merge');
const Paths = require('./Paths');
const path = require('path');

let baseConfig = require('./webpack.base');
let ssr_client = merge(baseConfig, {
  entry: {
    path: path.resolve(__dirname, '../src/client/App.js'),
  },

  output: {
    filename: "index.js",
    path: Paths.SSR_CLIENT,
  }
})

module.exports = ssr_client;