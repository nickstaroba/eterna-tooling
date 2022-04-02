const baseConfig = require("@eterna/webpack-config-typescript");
const path = require("path");

const localConfig = {
  entry: path.resolve("./src/index.tsx"),
};

module.exports = (env, argv) => ({
  ...baseConfig(env, argv),
  ...localConfig,
});
