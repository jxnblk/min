
require('babel/register')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

// Doesn't handle dynamic segments
var routes = require('./routes')
  .reduce(function (a, b, i) {
    var arr = []
    function getPaths(route) {
      if (route.path) {
        arr.push(route.path)
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
    path: __dirname + '/dist',
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
    new StaticSiteGeneratorPlugin('bundle.js', routes, {})
  ]

}

