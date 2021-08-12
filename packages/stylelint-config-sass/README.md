# Eterna Stylelint Config for SASS Projects

## Installation

```bash
npm i --save-dev @eterna/stylelint-config-sass
```

## Usage

Example `.stylelintrc.js`

```javascript
module.exports = {
  extends: ["@eterna/stylelint-config-sass"],
  ignoreFiles: ["dist/**/*", "node_modules/**/*"],
  ...
};
```
