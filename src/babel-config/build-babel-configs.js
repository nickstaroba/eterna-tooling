import { buildConfig } from "../build-config";
import { updateDependencies } from "../update-dependencies";

export const BabelConfigTypes = Object.freeze({
  JAVASCRIPT: "javascript",
  REACT: "react",
});

export function buildBabelConfigs(done) {
  Object.values(BabelConfigTypes).forEach((configType) => {
    buildConfig("babel", configType, true);
  });
  done();
}

export function updateBabelDependencies(done) {
  Object.values(BabelConfigTypes).forEach((configType) => {
    updateDependencies("babel", configType, true);
  });
  done();
}
