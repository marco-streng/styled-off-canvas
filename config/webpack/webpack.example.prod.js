const { merge } = require('webpack-merge')
const common = require('./webpack.example.common.js')

module.exports = merge(common, {
  bail: true,
  mode: 'production',
  output: {
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    filename: 'static/js/[name].[chunkhash:8].js'
  }
})
