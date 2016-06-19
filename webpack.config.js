const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      //this approach would add a style tag to your markup
      // {
      //   test: /\.css/,
      //   // if you use an array, loaders should be plural
      //   loaders: ['style', 'css'],
      //   //otherwise
      //   // loader: 'style!css', 
      //   include: __dirname + '/src',
      // },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css'),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};