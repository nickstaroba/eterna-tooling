const baseConfig = require("@eterna/webpack-config-typescript");
const { merge } = require("webpack-merge");
const path = require("path");

const localConfig = {
  entry: path.resolve("./src/index.ts"),
};

module.exports = (env, argv) => merge(baseConfig(env, argv), localConfig);
