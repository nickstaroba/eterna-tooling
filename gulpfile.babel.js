import { series } from "gulp";

import {
  buildBabelConfigs,
  updateBabelDependencies,
} from "./src/babel-config/build-babel-configs";
import {
  buildCommitlintConfigs,
  updateCommitlintDependencies,
} from "./src/commitlint-config/build-commitlint-configs";
import {
  buildEslintConfigs,
  updateEslintDependencies,
} from "./src/eslint-config/build-eslint-configs";
import {
  buildJestConfigs,
  updateJestDependencies,
} from "./src/jest-config/build-jest-configs";
import {
  buildLintStagedConfigs,
  updateLintStagedDependencies,
} from "./src/lint-staged-config/build-lint-staged-configs";
import {
  buildStylelintConfig,
  updateStylelintDependencies,
} from "./src/stylelint-config/build-stylelint-config";
import {
  buildTypescriptConfig,
  updateTypescriptDependencies,
} from "./src/typescript-config/build-typescript-config";
import {
  buildWebpackConfigs,
  updateWebpackDependencies,
} from "./src/webpack-config/build-webpack-config";

export const update = series(
  updateBabelDependencies,
  updateCommitlintDependencies,
  updateEslintDependencies,
  updateJestDependencies,
  updateLintStagedDependencies,
  updateStylelintDependencies,
  updateTypescriptDependencies,
  updateWebpackDependencies
);

export const build = series(
  buildBabelConfigs,
  buildCommitlintConfigs,
  buildEslintConfigs,
  buildJestConfigs,
  buildLintStagedConfigs,
  buildStylelintConfig,
  buildTypescriptConfig,
  buildWebpackConfigs
);
