
var merge = require('webpack-merge');

const Paths = require('./Paths');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

let baseConfig = require('./webpack.base');

let ssr_server = merge(baseConfig, {
  target: 'node',
  entry: path.resolve(__dirname, '../src/ssr/index.js'),
  output: {
    filename: "bundle-ssr.js",
    path: Paths.SSR_BUILD,
  },

  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'isomorphic-style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          }
        ]
      }
    ]
  },

  externals: [nodeExternals()]
})

module.exports = ssr_server;