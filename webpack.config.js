/* jshint node: true */
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.jsx',

  output: {
    path: path.join(__dirname),
    filename: 'react-z-sort.js',
    libraryTarget: 'umd',
    library: 'ReactZSort'
  },

  externals: {
    'react': 'var React',
    'react/addons': 'var React'
  },

  module: {
    loaders: [
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  }
};
