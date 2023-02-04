import { buildConfig } from "../build-config";
import { updateDependencies } from "../update-dependencies";

export const EslintConfigTypes = Object.freeze({
  JAVASCRIPT: "javascript",
  JEST: "jest",
  REACT: "react",
  TYPESCRIPT: "typescript",
});

export function buildEslintConfigs(done) {
  Object.values(EslintConfigTypes).forEach((configType) => {
    const useBaseConfig = configType !== EslintConfigTypes.REACT;
    buildConfig("eslint", configType, useBaseConfig);
  });
  done();
}

export function updateEslintDependencies(done) {
  Object.values(EslintConfigTypes).forEach((configType) => {
    updateDependencies("eslint", configType, true);
  });
  done();
}
