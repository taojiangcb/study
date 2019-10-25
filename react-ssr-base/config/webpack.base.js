const path = require('path');
const env = require('./env');

module.exports = {
  mode: env.mode,
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ],
        options: {
          "presets": ["react", "es2015", "stage-0", ["env", {
            "targets": {
              "browser": ["last 2 versions"]   //兼容浏览器的版本
            }
          }]]
        }
      }
    ]
  }
}