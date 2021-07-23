const path = require("path");

module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/index.{js,ts}"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    "\\.(gif|jpeg|jpg|md|otf|png|svg|ttf|woff|woff2)$": path.resolve(
      __dirname,
      "mock-file.js"
    ),
    "\\.s?css$": path.resolve(__dirname, "mock-style.js"),
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
