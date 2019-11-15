// import loader from 'postcss-loader';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { srcRoot, buildDir, pageDir, staticDir, publicDir } = require('./paths');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const env = require('./env')();

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.mjs', '.scss']
  },
  //多页构建
  entry: {
    //app 模块
    app: path.resolve(__dirname, '../src/page/index/index.jsx'),
    //详情分类
    category: path.resolve(__dirname, '../src/page/category/Index.jsx')
  },
  //提取公共模块
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'common'
        }
      }
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(srcRoot, '../src/common/styles/px2rem.scss')
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 5000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
        loader: require.resolve('url-loader'),
        options: {
          limit: 5000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      } // 限制大小小于5k      
    ]
  },

  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "My mt Project Webpack Build",
      // logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true
    }),

    require('autoprefixer'), //调用autoprefixer插件，例如 display: flex
    // app 模块
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/page/index/index.html'),
      filename: 'index.html',
      chunks: ['common', 'app']
    }),

    // category 模块
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/page/category/Category.html'),
      filename: 'category.html',
      chunks: ['common', 'category']
    }),

    new CopyPlugin([
      { from: publicDir, to: buildDir },
    ]),
  ]
}