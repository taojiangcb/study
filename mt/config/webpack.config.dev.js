const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const build_dev_conf = require('./webpack.config.build.dev.js');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const { buildDir } = require('./paths')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = require('./env')();
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const webpack_dev = merge(build_dev_conf, {


  devServer: {
    proxy: {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    contentBase: buildDir, //本地服务器所加载的页面所在的目录
    // public:'./public',
    // colors: true, //终端中输出结果为彩色
    // historyApiFallback: true, //不跳转
    // inline: true, //实时刷新
    hot: true  // 使用热加载插件 HotModuleReplacementPlugin
  },

  plugins: [
    // 热加载插件
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    // 打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),

    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8080'],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      },
      // should the console be cleared between each compilation?
      // default is true
      clearConsole: true,

      // add formatters and transformers (see below)
      // additionalFormatters: [],
      // additionalTransformers: []
    }),
  ]
})

module.exports = webpack_dev;