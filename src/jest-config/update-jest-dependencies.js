import path from "path";

import { updateDependencies } from "../update-dependencies";
import { JestConfigTypes } from "./jest-config-types";

export function updateJestDependencies(done) {
  Object.values(JestConfigTypes).forEach((jestConfigType) => {
    updateDependencies(
      jestConfigType,
      path.resolve(`./src/jest-config/package.${jestConfigType}.json`)
    );
  });
  done();
}
