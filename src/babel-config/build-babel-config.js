import path from "path";

import { buildPackage } from "../build-package";
import { configurePackageJson } from "../configure-package-json";
import packageJson from "./package.babel-config-javascript.json";

const configPath = path.resolve(__dirname, "babel-config-javascript.js");
const packageName = "babel-config-javascript";

export function buildBabelConfig(done) {
  configurePackageJson(packageName, packageJson).then(() =>
    buildPackage(configPath, packageName)
  );
  done();
}
