import path from "path";

import { updateDependencies } from "../update-dependencies";

export function updateCommitlintDependencies(done) {
  updateDependencies(
    "commitlint-config",
    path.resolve(`./src/commitlint-config/package.commitlint-config.json`)
  );
  done();
}
