import path from "path";

import { updateDependencies } from "../update-dependencies";

export function updateBabelDependencies(done) {
  updateDependencies(
    "babel-config",
    path.resolve(`./src/babel-config/package.babel-config-javascript.json`)
  );
  done();
}
