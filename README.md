# Eterna Tooling

Tooling library for JavaScript, TypeScript, and React projects.

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
