var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlPlugin = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: './dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    htmlPlugin
  ]
};
