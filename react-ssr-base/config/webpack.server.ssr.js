
var merge = require('webpack-merge');

const Paths = require('./Paths');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

let baseConfig = require('./webpack.base');


let ssr_server = merge(baseConfig, {
  target: 'node',
  
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: "bundle-ssr.js",
    path: Paths.SSR_BUILD,
  },
  externals: [nodeExternals()]
})

module.exports = ssr_server;