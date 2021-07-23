module.exports = {
  extends: [
    "./eslint-config-javascript.js",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest"],
  rules: {
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      { ts: "never", tsx: "never" },
    ],
    "no-use-before-define": "off",
  },
};
