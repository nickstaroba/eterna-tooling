import path from "path";

import { buildPackage } from "../build-package";
import { configurePackageJson } from "../configure-package-json";
import { LintStagedConfigTypes } from "./lint-staged-config-types";
import eslintPackageJson from "./package.lint-staged-config-eslint.json";
import prettierPackageJson from "./package.lint-staged-config-prettier.json";
import stylelintPackageJson from "./package.lint-staged-config-stylelint.json";

const configPaths = Object.fromEntries(
  Object.entries(LintStagedConfigTypes).map(([key, value]) => [
    key,
    path.resolve(__dirname, `${value}.js`),
  ])
);

export function buildLintStagedConfigs(done) {
  configurePackageJson(LintStagedConfigTypes.ESLINT, eslintPackageJson).then(
    () => buildPackage(configPaths.ESLINT, LintStagedConfigTypes.ESLINT)
  );

  configurePackageJson(
    LintStagedConfigTypes.PRETTIER,
    prettierPackageJson
  ).then(() =>
    buildPackage(configPaths.PRETTIER, LintStagedConfigTypes.PRETTIER)
  );

  configurePackageJson(
    LintStagedConfigTypes.STYLELINT,
    stylelintPackageJson
  ).then(() =>
    buildPackage(configPaths.STYLELINT, LintStagedConfigTypes.STYLELINT)
  );

  done();
}
