const jestConfigTypescript = require("./jest-config-typescript");

module.exports = {
  ...jestConfigTypescript,
  moduleNameMapper: {
    ...jestConfigTypescript.moduleNameMapper,
    "^react(.*)$": "<rootDir>/node_modules/react$1",
  },
};
