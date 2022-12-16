# webpack

This is a repo with various webpack examples.

## How to use

-- cd into the project directory and follow instructions on README.md

## Tips

Webpack will use the `webpack.config.js` file by default. If you want to use a different config file, you can use the `--config` flag.

```bash
npx webpack --config webpack.config.dev.js
```

## Packages to install for a new project

- `npm i webpack webpack-cli --save-dev`

## Configuration files

- `webpack.config.js` - default config file

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Remember to change next line to 'production' when you are ready to deploy
  mode: 'development',
}
```

## Watch for changes

To watch for changes, you can either add `watch: true` to the config file:

```js
module.exports = {
  watch: true,
}
```

Or you can use the `--watch`/`-w` flag:

```bash
npx webpack --watch
```

## Tips for creating scripts in package.json

```json
"scripts": {
  "build": "webpack",
  "watch": "webpack --watch"
}
```

_NOTE: Call those scripts with `npm run build` and `npm run watch`_

## Resources

- [Webpack](https://webpack.js.org/)
- [Webpack Guides](https://webpack.js.org/guides/)
