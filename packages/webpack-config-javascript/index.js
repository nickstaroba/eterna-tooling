const { merge } = require("webpack-merge");
const configBase = require("./webpack-config-base");

const es6Rule = {
  test: /\.(mjs|js|jsx)$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [["@babel/preset-env", { targets: "defaults" }]],
    },
  },
};

const resolveJsx = {
  extensions: [".jsx", "..."],
};

const mergeConfig = {
  module: {
    rules: [es6Rule],
  },
  resolve: resolveJsx,
};

function config(env, argv) {
  return merge(configBase.config(env, argv), mergeConfig);
}

exports.configBase = configBase;
exports.es6rule = es6Rule;
exports.resolveJsx = resolveJsx;
exports.config = config;
