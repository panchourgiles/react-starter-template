const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const rules = [
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'],
  }
]

module.exports = merge(common, {
  mode: 'development',
  module: { rules },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    contentBase: './dist',
  },
})