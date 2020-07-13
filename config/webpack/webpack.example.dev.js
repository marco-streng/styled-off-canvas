const { merge } = require('webpack-merge')
const common = require('./webpack.example.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    hot: true,
    open: true
  }
})
