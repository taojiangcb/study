
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = require('./env')();

console.log(env);

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/gi,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/gi,
        loader: 'babel-loader'
      },
      { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
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
      template: path.resolve(__dirname, '../app/index.tmpl.html'),
    }),
  ]
}