import { series } from "gulp";

import { buildBabelConfig } from "./src/babel-config/build-babel-config";
import { updateBabelDependencies } from "./src/babel-config/update-babel-dependencies";
import { buildCommitlintConfigs } from "./src/commitlint-config/build-commitlint-configs";
import { updateCommitlintDependencies } from "./src/commitlint-config/update-commitlint-dependencies";
import { buildEslintConfigs } from "./src/eslint-config/build-eslint-configs";
import { updateEslintDependencies } from "./src/eslint-config/update-eslint-dependencies";
import { buildJestConfigs } from "./src/jest-config/build-jest-configs";
import { updateJestDependencies } from "./src/jest-config/update-jest-dependencies";
import { buildLintStagedConfigs } from "./src/lint-staged-config/build-lint-staged-configs";
import { updateLintStagedDependencies } from "./src/lint-staged-config/update-lint-staged-dependencies";
import { buildStylelintConfig } from "./src/stylelint-config/build-stylelint-config";
import { updateStylelintDependencies } from "./src/stylelint-config/update-stylelint-dependencies";
import { buildTypescriptConfig } from "./src/typescript-config/build-typescript-config";
import { updateTypescriptDependencies } from "./src/typescript-config/update-typescript-dependencies";
import { buildWebpackConfigs } from "./src/webpack-config/build-webpack-config";
import { updateWebpackDependencies } from "./src/webpack-config/update-webpack-dependencies";

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
  buildBabelConfig,
  buildCommitlintConfigs,
  buildEslintConfigs,
  buildJestConfigs,
  buildLintStagedConfigs,
  buildStylelintConfig,
  buildTypescriptConfig,
  buildWebpackConfigs
);
