const baseConfig = require("@eterna/webpack-config-javascript");
const { merge } = require("webpack-merge");
const path = require("path");

const localConfig = {
  entry: path.resolve("./src/index.jsx"),
};

module.exports = (env, argv) => merge(baseConfig(env, argv), localConfig);
