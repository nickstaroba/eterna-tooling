const modeFlagIndex = process.argv.indexOf("--mode");

export const mode =
  modeFlagIndex > -1 ? process.argv[modeFlagIndex + 1] : undefined;
