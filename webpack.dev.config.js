
var webpack = require('webpack')
var StaticRenderPlugin = require('static-render-webpack-plugin')

const routes = [
  '/',
  '/about'
]

module.exports = {

  entry: {
    static: ['./static'],
    bundle: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './index'
    ]
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
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  }

}

