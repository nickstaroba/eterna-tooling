# Eterna Jest Config for JavaScript React Projects

## Installation

```bash
npm i --save-dev @eterna/jest-config-javascript-react
```

## Usage

Example `jest.config.js`

```javascript
const config = require("@eterna/jest-config-javascript-react");

const overrides = { ... }

module.exports = {
  ...config,
  ...overrides,
}
```
