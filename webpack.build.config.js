/* jshint node: true */

var config = require('./webpack.config.js');
delete config.externals;

module.exports = config;
