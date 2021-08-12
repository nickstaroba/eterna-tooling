const jestConfigBase = require("./jest-config-base");

module.exports = {
  ...jestConfigBase,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
