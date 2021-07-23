import path from "path";

import { buildPackage } from "../build-package";
import { configurePackageJson } from "../configure-package-json";
import packageJson from "./package.commitlint-config.json";

const configPath = path.resolve(__dirname, "commitlint-config.js");
const packageName = "commitlint-config";

export function buildCommitlintConfigs(done) {
  configurePackageJson(packageName, packageJson).then(() =>
    buildPackage(configPath, packageName)
  );
  done();
}
