const path = require('path')
// Se uso este module por una advertencia de express -> https://www.npmjs.com/package/webpack-node-externals
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    server: path.resolve(__dirname, '../src/server.js')
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist/server'),
    publicPath: '/dist/server/'
  },
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest', 'react']
          }
        }
      }
    ]
  },
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()]
}
