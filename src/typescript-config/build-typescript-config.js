import { dest, src } from "gulp";
import path from "path";

import { configurePackageJson, outputDir } from "../configure-package-json";
import packageJson from "./package.typescript-config.json";

const configPath = path.resolve(__dirname, "tsconfig.json");
const packageName = "typescript-config";

function buildConfig() {
  return src(configPath).pipe(dest(`${outputDir}/${packageName}`));
}

export function buildTypescriptConfig(done) {
  configurePackageJson(packageName, packageJson).then(() =>
    buildConfig(configPath, packageName)
  );
  done();
}
