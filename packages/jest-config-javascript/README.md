# Eterna Jest Config for JavaScript Projects

## Installation

```bash
npm i --save-dev @eterna/jest-config-javascript
```

## Usage

Example `jest.config.js`

```javascript
const config = require("@eterna/jest-config-javascript");

const overrides = { ... }

module.exports = {
  ...config,
  ...overrides,
}
```
