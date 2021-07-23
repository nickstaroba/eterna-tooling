# Eterna Webpack Config for TypeScript Projects

## Installation

```bash
npm i --save-dev @eterna/webpack-config-typescript
```

## Usage

Example `webpack.config.js`

```javascript
const config = require("@eterna/webpack-config-typescript");
const { merge } = require("webpack-merge");

const otherConfig = { ... }

module.exports = merge(config, otherConfig);
```
