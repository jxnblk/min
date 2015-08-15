
var webpack = require('webpack')
var StaticRenderPlugin = require('static-render-webpack-plugin')

// Pull this programmatically from index.routes
const routes = [
  '/',
  '/about'
]

module.exports = {

  entry: {
    static: ['./static'],
    bundle: ['./index']
  },

  output: {
    path: __dirname + '/dist',
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
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['css']
      }
    ]
  },

  plugins: [
    new StaticRenderPlugin('static.js', routes)
  ],

}

