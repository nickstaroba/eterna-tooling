# Eterna Tooling

Tooling library for JavaScript, TypeScript, and React projects.

Packages are published on npm under the [@eterna](https://www.npmjs.com/search?q=%40eterna) scope:

- [babel-config-javascript](./packages/babel-config-javascript/README.md)
- [babel-config-react](./packages/babel-config-react/README.md)
- [commitlint-config](./packages/commitlint-config/README.md)
- [eslint-config-javascript](./packages/eslint-config-javascript/README.md)
- [eslint-config-jest](./packages/eslint-config-jest/README.md)
- [eslint-config-react](./packages/eslint-config-react/README.md)
- [eslint-config-typescript](./packages/eslint-config-typescript/README.md)
- [jest-config-javascript](./packages/jest-config-javascript/README.md)
- [jest-config-javascript-react](./packages/jest-config-javascript-react/README.md)
- [jest-config-typescript](./packages/jest-config-typescript/README.md)
- [jest-config-typescript-react](./packages/jest-config-typescript-react/README.md)
- [lint-staged-config-eslint](./packages/lint-staged-config-eslint/README.md)
- [lint-staged-config-prettier](./packages/lint-staged-config-prettier/README.md)
- [lint-staged-config-stylelint](./packages/lint-staged-config-stylelint/README.md)
- [stylelint-config-sass](./packages/stylelint-config-sass/README.md)
- [typescript-config](./packages/typescript-config/README.md)
- [webpack-config-javascript](./packages/webpack-config-javascript/README.md)
- [webpack-config-react](./packages/webpack-config-react/README.md)
- [webpack-config-typescript](./packages/webpack-config-typescript/README.md)

## Installation

```shell script
npm i
```

## Building

```shell script
npm run packages:build
```

## Publishing

### Dry Run

Spin up Verdaccio:

```shell script
npm run verdaccio
```

Publish packages locally:

```shell script
npm run packages:publish-dry-run
```

After rebuilding, delete the existing packages and republish:

```shell script
rm -rf ~/.config/verdaccio/storage/@eterna/
```

## Testing

The `tests` directory contains three projects that use each tooling config.

These projects should be used for testing but are also example uses of each config.

## License

[MIT]

[mit]: https://choosealicense.com/licenses/mit/
