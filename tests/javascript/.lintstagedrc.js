const eslint = require("@eterna/lint-staged-config-eslint");
const prettier = require("@eterna/lint-staged-config-prettier");
const stylelint = require("@eterna/lint-staged-config-stylelint");

module.exports = {
  ...eslint,
  ...prettier,
  ...stylelint,
};
