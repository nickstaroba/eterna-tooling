const { merge } = require("webpack-merge");
const configBase = require("./webpack-config-base");

const resolveTsx = {
  extensions: [".tsx", ".ts", "..."],
};

const tsxRule = { test: /\.(ts|tsx)$/, loader: "ts-loader" };

const mergeConfig = {
  module: {
    rules: [tsxRule],
  },
  resolve: resolveTsx,
};

function config(env, argv) {
  return merge(configBase.config(env, argv), mergeConfig);
}

exports.configBase = configBase;
exports.resolveTsx = resolveTsx;
exports.tsxRule = tsxRule;
exports.config = config;
