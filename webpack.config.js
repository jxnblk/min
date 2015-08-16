
require('babel/register')
var webpack = require('webpack')
var StaticRenderPlugin = require('static-render-webpack-plugin')

var store = require('./store')
store.setState({
  script: '/bundle.js',
  baseurl: '/min'
})
var baseurl = store.getState().baseurl

// Pull this programmatically from index.routes
var routes = [
  '/',
  '/about'
]

module.exports = {

  entry: ['./index'],

  output: {
    path: __dirname + '/dist' + baseurl,
    filename: 'bundle.js',
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
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['css']
      }
    ]
  },

  plugins: [
    new StaticRenderPlugin('static.js', routes),
    new webpack.DefinePlugin({
      'process.env': {
        'BASE_URL': JSON.stringify(process.env.BASE_URL) || '""'
      }
    })
  ],

}

