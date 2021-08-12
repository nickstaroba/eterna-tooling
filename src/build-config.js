import fs from "fs";
import { dest, src } from "gulp";
import rename from "gulp-rename";
import path from "path";

import { configurePackageJson } from "./configure-package-json";

export const buildConfig = (tool, configType = "", useBaseConfig = false) => {
  const prefix = `${tool}-config`;

  const readFile = (file) => {
    const filePath = path.resolve("./src", prefix, file);
    return (
      fs.existsSync(filePath) && JSON.parse(fs.readFileSync(filePath, "utf-8"))
    );
  };

  const baseConfigName = `${prefix}-base`;
  const basePackageJson = readFile(`package.${baseConfigName}.json`);

  const configName = configType === "" ? prefix : `${prefix}-${configType}`;
  const configPackageJson = readFile(`package.${configName}.json`);

  const buildPackage = () => {
    src(`./src/${prefix}/${configName}.js`)
      .pipe(rename("index.js"))
      .pipe(dest(`./packages/${configName}`));
  };

  const copyBase = () => {
    src(`./src/${prefix}/${baseConfigName}.js`).pipe(
      dest(`./packages/${configName}`)
    );
  };

  const packageJson = useBaseConfig
    ? {
        ...configPackageJson,
        dependencies: {
          ...basePackageJson.dependencies,
          ...configPackageJson.dependencies,
        },
      }
    : configPackageJson;

  configurePackageJson(configName, packageJson).then(() => {
    buildPackage();
    if (useBaseConfig) copyBase();
  });
};
