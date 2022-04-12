const path = require('path');

module.exports = {
  mode: 'development',
  entry: './script.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};