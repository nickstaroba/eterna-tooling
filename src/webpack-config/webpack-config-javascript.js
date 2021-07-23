const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack-config-base");

const javascriptConfig = {
  entry: path.resolve("./src/index.js"),
  resolve: {
    extensions: [".css", ".js", ".json", ".jsx", ".scss"],
  },
};

module.exports = merge(baseConfig, javascriptConfig);
