var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const { resolve } = require('path');
const merge = require('webpack-merge');
const baseConf = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const production = merge(baseConf, {
  entry: {
    app: path.resolve(__dirname, '../app/index.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'whatwg-fetch',
      'immutable'
    ]
  },
  output: {
    path: resolve(__dirname, "../build"),
    filename: "[name].[chunkhash:8].js",
    publicPath: '/'
  },

  module: {
    rules: [
      
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
      { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
      { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]' },
      { test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]' }
    ]
  },

  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name:false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [
    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    // new webpack.optimize.OccurenceOrderPlugin(),

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     //supresses warnings, usually from module minification
    //     warnings: false
    //   }
    // }),

    new BundleAnalyzerPlugin(),
    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'),

    // 提供公共代码
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: '[name].[chunkhash:8].js'
    // }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: false
    })
  ]
})

module.exports = production;