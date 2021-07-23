import path from "path";

import { updateDependencies } from "../update-dependencies";
import { EslintConfigTypes } from "./eslint-config-types";

export function updateEslintDependencies(done) {
  Object.values(EslintConfigTypes).forEach((eslintConfigType) => {
    updateDependencies(
      eslintConfigType,
      path.resolve(`./src/eslint-config/package.${eslintConfigType}.json`)
    );
  });
  done();
}
