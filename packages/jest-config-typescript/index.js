const jestConfigJavascript = require("./jest-config-javascript");

module.exports = {
  ...jestConfigJavascript,
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "ts-jest",
  },
};
