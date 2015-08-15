
var webpack = require('webpack')
var StaticRenderPlugin = require('static-render-webpack-plugin')

const routes = [
  '/',
  '/about'
]

module.exports = {

  entry: {
    bundle: ['./entry'],
    hot: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './entry'
    ]
  },

  output: {
    path: __dirname,
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
        loaders: ['raw']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new StaticRenderPlugin('bundle.js', routes)
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
  }

}

