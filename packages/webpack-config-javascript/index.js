const { merge } = require("webpack-merge");
const baseConfig = require("./webpack-config-base");

const javascriptConfig = {
  module: {
    rules: [{ test: /\.jsx?$/, loader: "babel-loader" }],
  },
  resolve: {
    extensions: [".css", ".js", ".json", ".jsx", ".scss"],
  },
};

module.exports = (env, argv) => merge(baseConfig(env, argv), javascriptConfig);
