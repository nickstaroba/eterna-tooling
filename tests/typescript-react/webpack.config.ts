import baseConfig from "@eterna/webpack-config-typescript";
import path = require("path");

module.exports = {
  ...baseConfig,
  entry: path.resolve("./src/index.tsx"),
};
