import fs from "fs";
import prettier from "prettier";
import sortPackageJson from "sort-package-json";

import repositoryPackageJson from "../package.json";
import { writeFile } from "./write-file";

export const outputDir = "./packages";

export async function configurePackageJson(packageName, packageJsonTemplate) {
  const { author, bugs, homepage, license, repository } = repositoryPackageJson;
  const outputPackageJsonPath = `${outputDir}/${packageName}/package.json`;

  let version;
  if (!fs.existsSync(outputPackageJsonPath)) {
    version = "0.0.0";
  } else {
    version = JSON.parse(
      fs.readFileSync(outputPackageJsonPath, "utf-8")
    ).version;
  }

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
