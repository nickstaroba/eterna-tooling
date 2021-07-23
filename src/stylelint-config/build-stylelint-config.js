import path from "path";

import { buildPackage } from "../build-package";
import { configurePackageJson } from "../configure-package-json";
import stylelintPackageJson from "./package.stylelint-config-sass.json";

const configPath = path.resolve(__dirname, "stylelint-config-sass.js");
const packageName = "stylelint-config-sass";

export function buildStylelintConfig(done) {
  configurePackageJson(packageName, stylelintPackageJson).then(() =>
    buildPackage(configPath, packageName)
  );
  done();
}
