const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack-config-base");

const typescriptConfig = {
  entry: path.resolve("./src/index.ts"),
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".css", ".js", ".json", ".jsx", ".scss", ".ts", ".tsx"],
  },
};

module.exports = merge(baseConfig, typescriptConfig);
