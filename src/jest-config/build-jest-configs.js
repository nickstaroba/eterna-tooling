import { dest, src } from "gulp";

import { buildConfig } from "../build-config";
import { updateDependencies } from "../update-dependencies";

export const JestConfigTypes = Object.freeze({
  JAVASCRIPT: "javascript",
  JAVASCRIPT_REACT: "javascript-react",
  TYPESCRIPT: "typescript",
  TYPESCRIPT_REACT: "typescript-react",
});

export function buildJestConfigs(done) {
  Object.values(JestConfigTypes).forEach((configType) => {
    buildConfig("jest", configType, true);
    src(`${__dirname}/mock-*.js`).pipe(
      dest(`./packages/jest-config-${configType}`)
    );
  });
  done();
}

export function updateJestDependencies(done) {
  Object.values(JestConfigTypes).forEach((configType) => {
    updateDependencies("jest", configType, true);
  });
  done();
}
