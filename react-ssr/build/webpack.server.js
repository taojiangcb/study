const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js'),
  },
  externals: Object.keys(require('../package.json').dependencies),
  output: {
    filename: 'server-entry.js',
    publicPath:'/public/',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins:[
    new HtmlPlugin({
      template:path.join(__dirname,'../client/template-server.html'),
    }),
  ],
}