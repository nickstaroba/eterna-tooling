import fs from "fs";
import prettier from "prettier";
import sortPackageJson from "sort-package-json";

import repositoryPackageJson from "../package.json";
import { mode } from "./cli";
import { writeFile } from "./write-file";

export async function configurePackageJson(packageName, packageJsonTemplate) {
  const { author, bugs, homepage, license, repository } = repositoryPackageJson;
  const outputPackageJsonPath = `./packages/${packageName}/package.json`;

  let version;

  version = fs.existsSync(outputPackageJsonPath)
    ? JSON.parse(fs.readFileSync(outputPackageJsonPath, "utf-8")).version.split(
        "-"
      )[0]
    : "0.0.0";

  version = mode === "development" ? `${version}-${Date.now()}` : version;

  const packageJson = prettier.format(
    sortPackageJson(
      JSON.stringify(
        {
          ...packageJsonTemplate,
          version,
          author,
          bugs,
          homepage,
          license,
          repository,
        },
        null,
        2
      )
    ),
    { parser: "json" }
  );

  await writeFile(outputPackageJsonPath, packageJson);
}
