# Eterna Jest Config for TypeScript Projects

## Installation

```bash
npm i --save-dev @eterna/jest-config-typescript
```

## Usage

Example `jest.config.js`

```javascript
const config = require("@eterna/jest-config-typescript");

const overrides = { ... }

module.exports = {
  ...config,
  ...overrides,
}
```
