const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: path.join(__dirname, '../client/main.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '' //打包后的目录前缀
  },
  module:{
    rules:[
      {
        test:/.jsx$/,
        loader:'babel-loader',
      },
      {
        test:/.js$/,
        loader:'babel-loader',
        exclude:[
          path.join(__dirname,'../node_modules'),
        ]
      }
    ]
  },
  plugins:[
    new HtmlPlugin({
      template:path.join(__dirname,'../client/template.html'),
    }),
  ],

}