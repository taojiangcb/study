const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const baseConf = require('./webpack.config.base');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const { buildDir } = require('./paths')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = require('./env')();

const webpack_build_dev = merge(baseConf, {
  entry: path.resolve(__dirname, '../src/page/index/index.jsx'),
  output: {
    path: buildDir,
    filename: "bundle.js",
  },

  plugins: [
    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: true
    })
  ]
})

module.exports = webpack_build_dev;