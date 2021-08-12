import baseConfig from "@eterna/webpack-config-typescript";
import path = require("path");

const localConfig = {
  entry: path.resolve("./src/index.tsx"),
};

module.exports = (env, argv) => ({
  ...baseConfig(env, argv),
  ...localConfig,
});
