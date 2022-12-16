# webpack

This is a project showing how use webpack source maps and webpack-dev-server.

### Install webpack-dev-server

```bash
npm install --save-dev webpack-dev-server
```

### Configure webpack

```js
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
```

### Configure package.json start script

```json
"start": "webpack serve --open"
```

### Run webpack-dev-server

```bash
npm run start
```

### webpack-dev-middleware

webpack-dev-middleware is a wrapper that will emit files processed by webpack to a server.

- Install webpack-dev-middleware

```bash
npm install --save-dev express webpack-dev-middleware
```

- Learn more about webpack-dev-middleware [here](https://webpack.js.org/guides/development/)
