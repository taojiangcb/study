const argv = require('yargs-parser')(process.argv.slice(2));
//const mode = argv.model || 'development';

let processEnv = process.env || {};
process.env = Object.assign(processEnv,argv);

module.exports = {
  mode:process.env.mode,
  development:'development',
  product:''

}