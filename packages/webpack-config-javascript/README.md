# Eterna Webpack Config for JavaScript Projects

## Installation

```bash
npm i --save-dev @eterna/webpack-config-javascript
```

## Usage

Example `webpack.config.mjs`

```javascript
import { config } from "@eterna/webpack-config-javascript";
import { merge } from "webpack-merge";
import path from "path";

const mergeConfig = {
  entry: path.resolve("./src/index.js"),
};

export default (env, argv) => merge(config(env, argv), mergeConfig);
```
