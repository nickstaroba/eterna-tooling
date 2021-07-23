import { dest, src } from "gulp";
import rename from "gulp-rename";
import path from "path";

import { configurePackageJson, outputDir } from "../configure-package-json";
import { EslintConfigTypes } from "./eslint-config-types";
import javascriptPackageJson from "./package.eslint-config-javascript.json";
import typescriptPackageJson from "./package.eslint-config-typescript.json";
import typescriptReactPackageJson from "./package.eslint-config-typescript-react.json";

const configPaths = Object.fromEntries(
  Object.entries(EslintConfigTypes).map(([key, value]) => [
    key,
    path.resolve(__dirname, `${value}.js`),
  ])
);

const packagePaths = Object.fromEntries(
  Object.entries(EslintConfigTypes).map(([key, value]) => [
    key,
    path.resolve(outputDir, value),
  ])
);

const javascriptPackageJsonTemplate = javascriptPackageJson;
const typescriptPackageJsonTemplate = {
  ...typescriptPackageJson,
  peerDependencies: {
    ...javascriptPackageJson.peerDependencies,
    ...typescriptPackageJson.peerDependencies,
  },
};
const typescriptReactPackageJsonTemplate = {
  ...typescriptReactPackageJson,
  peerDependencies: {
    ...javascriptPackageJson.peerDependencies,
    ...typescriptPackageJson.peerDependencies,
    ...typescriptReactPackageJson.peerDependencies,
  },
};

const buildEslintJavascript = () =>
  src(configPaths.JAVASCRIPT)
    .pipe(rename("index.js"))
    .pipe(dest(packagePaths.JAVASCRIPT));

const buildEslintTypescript = () =>
  src(configPaths.TYPESCRIPT)
    .pipe(rename("index.js"))
    .pipe(src(configPaths.JAVASCRIPT))
    .pipe(dest(packagePaths.TYPESCRIPT));

const buildEslintTypescriptReact = () =>
  src(configPaths.TYPESCRIPT_REACT)
    .pipe(rename("index.js"))
    .pipe(src(configPaths.JAVASCRIPT))
    .pipe(src(configPaths.TYPESCRIPT))
    .pipe(dest(packagePaths.TYPESCRIPT_REACT));

export function buildEslintConfigs(done) {
  configurePackageJson(
    EslintConfigTypes.JAVASCRIPT,
    javascriptPackageJsonTemplate
  ).then(() => buildEslintJavascript());

  configurePackageJson(
    EslintConfigTypes.TYPESCRIPT,
    typescriptPackageJsonTemplate
  ).then(() => buildEslintTypescript());

  configurePackageJson(
    EslintConfigTypes.TYPESCRIPT_REACT,
    typescriptReactPackageJsonTemplate
  ).then(() => buildEslintTypescriptReact());

  done();
}
