import { dest, src } from "gulp";
import rename from "gulp-rename";

import { outputDir } from "./configure-package-json";

export const buildPackage = (configPath, packageName) =>
  src(configPath)
    .pipe(rename("index.js"))
    .pipe(dest(`${outputDir}/${packageName}`));
