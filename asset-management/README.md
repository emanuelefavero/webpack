# webpack

This is a project showing how to manage assets with webpack.

NOTE: Thanks to css-loader and style-loader you can import CSS files with `import './style.css'`. It also allows you to bundle all your CSS into a single file.

## How to use

```bash
npm install
npm run build
```

_NOTE: `npm run build` will run `npx webpack`_

## Tips

Webpack will use the `webpack.config.js` file by default. If you want to use a different config file, you can use the `--config` flag.

```bash
npx webpack --config webpack.config.dev.js
```

## Packages to install for a new project

- `npm i webpack webpack-cli --save-dev`
- `npm i css-loader style-loader --save-dev`

## Resources

- [Webpack](https://webpack.js.org/)
- [Webpack Guides](https://webpack.js.org/guides/)
