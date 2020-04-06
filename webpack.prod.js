const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const rules = [
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      'css-loader'
    ]
  }
]

module.exports = merge(common, {
  mode: 'production',
  module: { rules },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*']
    })
  ],
})