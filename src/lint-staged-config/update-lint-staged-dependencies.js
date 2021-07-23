import path from "path";

import { updateDependencies } from "../update-dependencies";

export function updateLintStagedDependencies(done) {
  updateDependencies(
    "lint-staged-config-eslint",
    path.resolve(
      `./src/lint-staged-config/package.lint-staged-config-eslint.json`
    )
  );
  updateDependencies(
    "lint-staged-config-prettier",
    path.resolve(
      `./src/lint-staged-config/package.lint-staged-config-prettier.json`
    )
  );
  updateDependencies(
    "lint-staged-config-stylelint",
    path.resolve(
      `./src/lint-staged-config/package.lint-staged-config-stylelint.json`
    )
  );
  done();
}
