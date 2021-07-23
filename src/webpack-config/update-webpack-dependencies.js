import path from "path";

import { updateDependencies } from "../update-dependencies";
import { WebpackConfigTypes } from "./webpack-config-types";

export function updateWebpackDependencies(done) {
  Object.values(WebpackConfigTypes).forEach((configType) => {
    updateDependencies(
      configType,
      path.resolve(`./src/webpack-config/package.${configType}.json`)
    );
  });
  done();
}
