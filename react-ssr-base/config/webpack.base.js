const path = require('path');
const env = require('./env');

module.exports = {
  mode: env.mode,
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/gi,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ],
        options: {
          "presets": ["react", "stage-0", "es2015", ["env", {
            "targets": {
              "browser": ["last 2 versions"]   //兼容浏览器的版本
            }
          }]]
        }
      }
    ]
  }
}