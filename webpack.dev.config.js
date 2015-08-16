
require('babel/register')
var webpack = require('webpack')
var StaticRenderPlugin = require('static-render-webpack-plugin')

var store = require('./store')
var state = store.getState()
var baseurl = state.baseurl

var routes = [
  '/',
  '/about'
]

module.exports = {

  entry: {
    static: ['./index'],
    bundle: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './index'
    ]
  },

  output: {
    path: __dirname + '/dist' + baseurl,
    filename: '[name].js',
    libraryTarget: 'umd'
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
      {
        test: /\.css$/,
        loaders: ['css']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new StaticRenderPlugin('static.js', routes)
  ],

  devServer: {
    contentBase: './dist' + baseurl,
    historyApiFallback: true,
    hot: true,
  }

}

