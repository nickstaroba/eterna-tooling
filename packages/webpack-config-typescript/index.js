const { merge } = require("webpack-merge");
const baseConfig = require("./webpack-config-base");

const typescriptConfig = {
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".css", ".js", ".json", ".jsx", ".scss", ".ts", ".tsx"],
  },
};

module.exports = (env, argv) => merge(baseConfig(env, argv), typescriptConfig);
