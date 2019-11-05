const argv = require('yargs-parser')(process.argv.slice(2));

var REACT_APP = /^REACT_APP_/i;
module.exports = function () {
  var react_env = Object
    .keys(argv)
    .filter(key => { REACT_APP.test(key) })
    .reduce((env, key) => {
      env[key] = argv.key
    }, {})
  return { react_env, argv }
}
