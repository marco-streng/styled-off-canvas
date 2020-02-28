const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const BUILD_FOLDER = 'build'

module.exports = {
  entry: [
    'core-js/stable',
    './example/index.js'
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'standard-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    open: true
  },
  output: {
    path: path.join(__dirname, '..', '..', BUILD_FOLDER)
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'styled off-canvas',
      favicon: 'example/static/icons/favicon.ico',
      template: 'example/index.html'
    }),
    new StyleLintPlugin({
      files: 'example/**/*.js'
    })
  ]
}
