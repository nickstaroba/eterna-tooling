import { dest, src } from "gulp";
import rename from "gulp-rename";
import path from "path";

import { configurePackageJson, outputDir } from "../configure-package-json";
import { JestConfigTypes } from "./jest-config-types";
import javascriptPackageJson from "./package.jest-config-javascript.json";
import typescriptPackageJson from "./package.jest-config-typescript.json";
import typescriptReactPackageJson from "./package.jest-config-typescript-react.json";

const configPaths = Object.fromEntries(
  Object.entries(JestConfigTypes).map(([key, value]) => [
    key,
    path.resolve(__dirname, `${value}.js`),
  ])
);

const packagePaths = Object.fromEntries(
  Object.entries(JestConfigTypes).map(([key, value]) => [
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

const buildJestJavascript = () =>
  src(configPaths.JAVASCRIPT)
    .pipe(rename("index.js"))
    .pipe(src(`${__dirname}/mock-*.js`))
    .pipe(dest(packagePaths.JAVASCRIPT));

const buildJestTypescript = () =>
  src(configPaths.TYPESCRIPT)
    .pipe(rename("index.js"))
    .pipe(src(configPaths.JAVASCRIPT))
    .pipe(src(`${__dirname}/mock-*.js`))
    .pipe(dest(packagePaths.TYPESCRIPT));

const buildJestTypescriptReact = () =>
  src(configPaths.TYPESCRIPT_REACT)
    .pipe(rename("index.js"))
    .pipe(src(configPaths.JAVASCRIPT))
    .pipe(src(configPaths.TYPESCRIPT))
    .pipe(src(`${__dirname}/mock-*.js`))
    .pipe(dest(packagePaths.TYPESCRIPT_REACT));

export function buildJestConfigs(done) {
  configurePackageJson(
    JestConfigTypes.JAVASCRIPT,
    javascriptPackageJsonTemplate
  ).then(() => buildJestJavascript());

  configurePackageJson(
    JestConfigTypes.TYPESCRIPT,
    typescriptPackageJsonTemplate
  ).then(() => buildJestTypescript());

  configurePackageJson(
    JestConfigTypes.TYPESCRIPT_REACT,
    typescriptReactPackageJsonTemplate
  ).then(() => buildJestTypescriptReact());

  done();
}
