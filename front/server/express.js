const express = require('express')
const server = express()

const webpack = require("webpack")
const config = require("../config/webpack.dev.js")
const compiler = webpack(config)

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
)

const webpackHotMiddlware = require("webpack-hot-middleware")(
  compiler,
  config.devServer
)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddlware)
console.log("Middleware enabled")

const staticMiddleware = express.static("public")
server.use(staticMiddleware)

const PORT = 5000
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
