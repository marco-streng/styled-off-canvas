const { merge } = require('webpack-merge')
const common = require('./webpack.example.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean)
            }
          }
        ]
      }
    ]
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    hot: true,
    open: true
  }
})
