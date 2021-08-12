import { dest, src } from "gulp";
import path from "path";

import { configurePackageJson } from "../configure-package-json";
import { updateDependencies } from "../update-dependencies";
import packageJson from "./package.typescript-config.json";

const configPath = path.resolve(__dirname, "tsconfig.json");
const packageName = "typescript-config";

function buildConfig() {
  return src(configPath).pipe(dest(`./packages/${packageName}`));
}

export function buildTypescriptConfig(done) {
  configurePackageJson(packageName, packageJson).then(() => buildConfig());
  done();
}

export function updateTypescriptDependencies(done) {
  updateDependencies("typescript");
  done();
}
