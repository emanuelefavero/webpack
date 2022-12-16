const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },

  // Source map is a way of mapping code within a compressed file back to it’s original position in a source file. (useful for debugging)
  devtool: 'inline-source-map',

  // The devServer property tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),

    clean: true,
  },

  // The optimization property tells webpack to split your code into separate bundles. This can drastically improve load time.
  optimization: {
    runtimeChunk: 'single',
  },

  mode: 'development',
}
