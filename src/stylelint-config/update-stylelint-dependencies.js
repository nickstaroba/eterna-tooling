import path from "path";

import { updateDependencies } from "../update-dependencies";

export function updateStylelintDependencies(done) {
  updateDependencies(
    "stylelint-config-sass",
    path.resolve(`./src/stylelint-config/package.stylelint-config-sass.json`)
  );
  done();
}
