
var webpack = require('webpack')

module.exports = {
  entry:  [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './entry'
  ],

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    hot: true,
    historyApiFallback: true
  }
}

