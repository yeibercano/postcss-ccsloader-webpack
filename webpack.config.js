const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')


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
        //  loader: ExtractTextPlugin.extract('css'),
        // include: __dirname + '/src',
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
        include: __dirname + '/src',
      },
    ]
  },
  postcss: [
    require('autoprefixer'),
    // require('postcss-color-rebeccapurple')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3333,
        proxy: 'http://localhost:8080/'
    })
  ]
};