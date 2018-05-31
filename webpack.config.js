const path = require('path')
const webpack = require('webpack')
const Stylish = require('webpack-stylish')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'carddeck.js',
    library: 'carddeck',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [new webpack.NamedModulesPlugin(), new Stylish()],

  devtool: 'source-map',

  stats: 'none',

  mode: 'production'
}
