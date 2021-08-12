import { buildConfig } from "../build-config";
import { updateDependencies } from "../update-dependencies";

export const LintStagedConfigTypes = Object.freeze({
  ESLINT: "eslint",
  PRETTIER: "prettier",
  STYLELINT: "stylelint",
});

export function buildLintStagedConfigs(done) {
  Object.values(LintStagedConfigTypes).forEach((configType) => {
    buildConfig("lint-staged", configType);
  });
  done();
}

export function updateLintStagedDependencies(done) {
  Object.values(LintStagedConfigTypes).forEach((configType) => {
    updateDependencies("lint-staged", configType);
  });
  done();
}
