module.exports = {
  env: {
    browser: true,
    jest: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  ignorePatterns: [
    ".idea/",
    ".vscode/",
    "coverage/",
    "dist/",
    "node_modules/",
    "package-lock.json",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["jest", "import", "simple-import-sort"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.config.{js,jsx,ts,tsx}",
          "**/*.config.*.{js,jsx,ts,tsx}",
          "**/*.stories.{js,jsx,ts,tsx}",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/gulpfile.*.js",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-imports": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
      },
    },
    "import/extensions": [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
};
