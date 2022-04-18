const path = require("path");
const { merge } = require("webpack-merge");
const configBase = require("./webpack-config-base");

const reactAlias = {
  alias: {
    react: path.join(process.cwd(), "node_modules/react"),
  },
};

const svgrRule = {
  test: /\.svg$/,
  use: "@svgr/webpack",
};

const mergeConfig = {
  module: {
    rules: [svgrRule],
  },
  resolve: reactAlias,
};

function config(env, argv) {
  return merge(configBase.config(env, argv), mergeConfig);
}

exports.configBase = configBase;
exports.reactAlias = reactAlias;
exports.svgrRule = svgrRule;
exports.config = config;
