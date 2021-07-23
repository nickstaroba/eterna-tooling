import ncu from "npm-check-updates";

export function updateDependencies(packageName, packageFilePath) {
  ncu
    .run({
      packageFile: packageFilePath,
      target: "latest",
      upgrade: true,
    })
    .then((upgraded) => {
      const isUpdated = Object.keys(upgraded).length !== 0;

      const message = isUpdated ? "Update" : "Latest";

      console.info(message, ":", packageName);

      if (isUpdated) {
        Object.keys(upgraded).forEach((dependency) => {
          console.info("  - ", dependency);
        });
      }
    });
}
