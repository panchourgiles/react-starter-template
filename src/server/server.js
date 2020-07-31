import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'

const app = express()

dotenv.config()
const { ENV, PORT } = process.env

if (ENV === 'development') {
  const webpackConfig = require('../../webpack.dev')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = { port: PORT, hot: true }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
}

app.get('*', (req, res) => {
  res.send({ hello: 'Hola express con nodemon '})
})

app.listen(PORT, (error) => {
  if (error) console.log(error)
  else console.log(`[App]: Listening on port ${PORT} on ${ENV} mode`)
})