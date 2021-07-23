import path from "path";

import { updateDependencies } from "../update-dependencies";

export function updateTypescriptDependencies(done) {
  updateDependencies(
    "typescript-config",
    path.resolve(`./src/typescript-config/package.typescript-config.json`)
  );
  done();
}
