import ncu from "npm-check-updates";

export function updateDependencies(
  tool,
  configType = "",
  useBaseConfig = false
) {
  const prefix = `${tool}-config`;
  const baseConfigName = `${prefix}-base`;
  const configName = configType === "" ? prefix : `${prefix}-${configType}`;
  const packagePaths = {
    [configName]: `./src/${prefix}/package.${configName}.json`,
  };

  if (useBaseConfig)
    packagePaths[
      `${baseConfigName} (${configType})`
    ] = `./src/${prefix}/package.${baseConfigName}.json`;

  Object.entries(packagePaths).forEach(([config, packagePath]) => {
    ncu
      .run({
        packageFile: packagePath,
        target: "latest",
        upgrade: true,
      })
      .then((upgraded) => {
        const isUpdated = Object.keys(upgraded).length !== 0;

        const message = isUpdated ? "Update" : "Latest";

        console.info(message, ":", config);

        if (isUpdated) {
          Object.keys(upgraded).forEach((dependency) => {
            console.info("  - ", dependency);
          });
        }
      });
  });
}
