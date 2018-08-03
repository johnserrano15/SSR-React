const server = require('./webpack/webpack.server')
let client = require('./webpack/webpack.dev')

if (process.env.NODE_ENV) {
  client = require('./webpack/webpack.prod')
}

module.exports = [server, client]
