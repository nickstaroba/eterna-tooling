import { buildConfig } from "../build-config";
import { updateDependencies } from "../update-dependencies";

export const WebpackConfigTypes = Object.freeze({
  JAVASCRIPT: "javascript",
  REACT: "react",
  TYPESCRIPT: "typescript",
});

export function buildWebpackConfigs(done) {
  Object.values(WebpackConfigTypes).forEach((configType) => {
    buildConfig("webpack", configType, true);
  });
  done();
}

export function updateWebpackDependencies(done) {
  Object.values(WebpackConfigTypes).forEach((configType) => {
    updateDependencies("webpack", configType, true);
  });
  done();
}
