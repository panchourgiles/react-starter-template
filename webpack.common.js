const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  }
]

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      hash: true
    }),
  ],
  stats: {
    children: false,
  },
}