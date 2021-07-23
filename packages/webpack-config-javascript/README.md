# Eterna Webpack Config for JavaScript Projects

## Installation

```bash
npm i --save-dev @eterna/webpack-config-javascript
```

## Usage

Example `webpack.config.js`

```javascript
const config = require("@eterna/webpack-config-javascript");
const { merge } = require("webpack-merge");

const otherConfig = { ... }

module.exports = merge(config, otherConfig);
```
