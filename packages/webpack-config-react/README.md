# Eterna Webpack Config for React Projects

## Installation

```bash
npm i --save-dev @eterna/webpack-config-react @eterna/webpack-config-javascript
```

Or with TypeScript:

```bash
npm i --save-dev @eterna/webpack-config-react @eterna/webpack-config-typescript
```

## Usage

Example `webpack.config.mjs`

```javascript
import configJavascript from "@eterna/webpack-config-javascript";
import configReact from "@eterna/webpack-config-react";
import path from "path";
import { mergeWithRules } from "webpack-merge";

const mergeConfig = {
  entry: path.resolve("./src/index.jsx"),
};

export default (env, argv) =>
  mergeWithRules(configJavascript.configBase.mergeRules)(
    configJavascript.config(env, argv),
    configReact.config(env, argv),
    mergeConfig
  );
```

Or with TypeScript:

```typescript
import configTypescript from "@eterna/webpack-config-typescript";
import configReact from "@eterna/webpack-config-react";
import path from "path";
import { mergeWithRules } from "webpack-merge";

const mergeConfig = {
  entry: path.resolve("./src/index.tsx"),
};

export default (env, argv) =>
  mergeWithRules(configTypescript.configBase.mergeRules)(
    configTypescript.config(env, argv),
    configReact.config(env, argv),
    mergeConfig
  );
```

Or with some overrides:

```javascript
import HtmlWebPackPlugin from "html-webpack-plugin";
import configJavascript from "@eterna/webpack-config-javascript";
import { merge } from "webpack-merge";

const entry = {
  main: "./src/index.js",
  about: "./src/about/about.js",
  contact: "./src/contact/contact.js",
};

const configJavascriptOverride = (env, argv) => ({
  ...configJavascript.config(env, argv),
  plugins: [
    ...Object.keys(entry).map((page) => {
      return new HtmlWebPackPlugin({
        chunks: [page],
        filename: page === "main" ? "index.html" : `${page}/index.html`,
      });
    }),
    configJavascript.configBase.defaultMiniCssExtractPlugin,
  ],
});

const mergeConfig = {
  entry,
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === "main" ? "[name].js" : "[name]/[name].js";
    },
  },
};

export default (env, argv) =>
  merge(configJavascriptOverride(env, argv), mergeConfig);
```
