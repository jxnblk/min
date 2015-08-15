
require('babel/register')
var webpack = require('webpack')
var data = require('./data')
var baseurl = data.getState().baseurl

module.exports = {

  entry:  [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './entry'
  ],

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      { test: /\.css$/, loader: 'css' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: './dist/',
    historyApiFallback: true,
    hot: true,
  }

}

