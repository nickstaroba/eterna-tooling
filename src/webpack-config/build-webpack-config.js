import { dest, src } from "gulp";
import rename from "gulp-rename";
import path from "path";

import { configurePackageJson, outputDir } from "../configure-package-json";
import javascriptPackageJson from "./package.webpack-config-javascript.json";
import typescriptPackageJson from "./package.webpack-config-typescript.json";
import { WebpackConfigTypes } from "./webpack-config-types";

const baseConfigPath = path.resolve(__dirname, "webpack-config-base.js");

const configPaths = Object.fromEntries(
  Object.entries(WebpackConfigTypes).map(([key, value]) => [
    key,
    path.resolve(__dirname, `${value}.js`),
  ])
);

const packagePaths = Object.fromEntries(
  Object.entries(WebpackConfigTypes).map(([key, value]) => [
    key,
    path.resolve(outputDir, value),
  ])
);

const buildWebpackJavascript = () =>
  src(configPaths.JAVASCRIPT)
    .pipe(rename("index.js"))
    .pipe(src(baseConfigPath))
    .pipe(dest(packagePaths.JAVASCRIPT));

const buildWebpackTypescript = () =>
  src(configPaths.TYPESCRIPT)
    .pipe(rename("index.js"))
    .pipe(src(baseConfigPath))
    .pipe(src(configPaths.JAVASCRIPT))
    .pipe(dest(packagePaths.TYPESCRIPT));

export function buildWebpackConfigs(done) {
  configurePackageJson(
    WebpackConfigTypes.JAVASCRIPT,
    javascriptPackageJson
  ).then(() => buildWebpackJavascript());

  configurePackageJson(
    WebpackConfigTypes.TYPESCRIPT,
    typescriptPackageJson
  ).then(() => buildWebpackTypescript());

  done();
}
