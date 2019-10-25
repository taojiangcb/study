var merge = require('webpack-merge');
const Paths = require('./Paths');
const path = require('path');
const baseconfig = require('./webpack.base.js');
const nodeExternals = require('webpack-node-externals');


let devssr = merge(baseconfig, {
  target: 'node',
  entry: path.resolve(__dirname, '../src/ssr/render.js'),
  output: {
    filename: "bundle-ssr-render.js",
    path: Paths.SSR_BUILD,
  },
  externals: [nodeExternals()]
})

module.exports = devssr;