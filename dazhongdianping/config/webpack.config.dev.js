const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const baseConf = require('./webpack.config.base');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const env = require('./env')

env();

const webpack_dev = merge(baseConf, {
  entry: path.resolve(__dirname, '../app/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: "bundle.js"
  },

  devServer: {
    proxy: {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    // colors: true, //终端中输出结果为彩色
    // historyApiFallback: true, //不跳转
    // inline: true, //实时刷新
    hot: true  // 使用热加载插件 HotModuleReplacementPlugin
  },

  plugins: [
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),
    // 打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: true
    })
  ]
})

module.exports = webpack_dev;