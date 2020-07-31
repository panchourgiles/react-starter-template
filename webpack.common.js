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
    app: [
      path.join(__dirname, 'src/frontend', 'index.js'),
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/frontend', 'index.html'),
      filename: 'index.html',
      hash: true
    }),
  ],
  stats: {
    children: false,
  },
}