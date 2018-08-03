const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/home.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  plugins: [new ExtractTextPlugin('css/[name].css')],
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
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }
}
