import { buildConfig } from "../build-config";
import { updateDependencies } from "../update-dependencies";
import { StylelintConfigTypes } from "./stylelint-config-types";

export function buildStylelintConfig(done) {
  Object.values(StylelintConfigTypes).forEach((configType) => {
    buildConfig("stylelint", configType);
  });
  done();
}

export function updateStylelintDependencies(done) {
  Object.values(StylelintConfigTypes).forEach((configType) => {
    updateDependencies("stylelint", configType);
  });
  done();
}
