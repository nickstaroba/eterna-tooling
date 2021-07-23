# Eterna TypeScript Config

## Installation

```bash
npm i --save-dev @eterna/typescript-config
```

## Usage

Example `tsconfig.json`

```json
{
  "extends": "./node_modules/@eterna/typescript-config/tsconfig.json",
  "exclude": ["dist/", "node_modules/"],
  "include": ["src/"]
}
```
