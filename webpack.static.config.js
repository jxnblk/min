
require('babel/register')
var webpack = require('webpack')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

var data = require('./data')
var baseurl = data.baseurl

// Doesn't handle dynamic segments
var routes = require('./routes')
  .reduce(function (a, b, i) {
    var arr = []
    function getPaths(route) {
      if (route.path) {
        var path = route.path.replace(baseurl, '')
        arr.push(path)
      }
      if (route.childRoutes) {
        route.childRoutes.forEach(function (childRoute) {
          getPaths(childRoute)
        })
      }
    }
    getPaths(b)
    return a.concat(arr)
  }, [])

module.exports = {
  entry: './static.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist' + baseurl,
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
        loaders: ['style', 'raw']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      '__STATIC': 'true',
      'process.env': {
        'BASE_URL': JSON.stringify(process.env.BASE_URL) || '""'
      }
    }),
    new StaticSiteGeneratorPlugin('bundle.js', routes, data)
  ]

}

