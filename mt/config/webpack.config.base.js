
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const env = require('./env')();
const { srcRoot, buildDir, pageDir, publicDir } = require('./paths');

module.exports = {
  mode: 'production',
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

      { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000' },  // 限制大小5kb
      { test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000' } // 限制大小小于5k
    ]
  },

  // eslint: {
  //   configFile: '.eslintrc' // Rules for eslint
  // },

  plugins: [

    require('autoprefixer'), //调用autoprefixer插件，例如 display: flex
    // html 模板插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/page/index/index.html'),
    }),

    new CopyPlugin([
      { from: publicDir, to: buildDir },
    ]),

  ]
}