module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier",
  ],
  rules: {
    "max-nesting-depth": null,
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
  },
};
