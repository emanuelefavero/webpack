const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// NOTE: Remember to install the html-webpack-plugin dependency:
// npm install --save-dev html-webpack-plugin).

module.exports = {
  // You can specify multiple entry points for your application. This is useful if you want to split your application into multiple bundles that can be loaded on demand.
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },

  // Html webpack plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],

  // The output property tells webpack where to emit the bundles it creates and how to name these files.
  output: {
    // The [name] placeholder tells webpack to use the name of the entry point as the name of the output file. (e.g. index.bundle.js)
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),

    // The clean property tells webpack to remove all files from the dist folder before each build.
    clean: true,
  },
  mode: 'development',
}
