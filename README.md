# Whateverest

A monorepo of ideas. Mostly random tools and packages and whatever. Whateverest is an excuse to learn through making, using yarn workspaces to try to manage the randomness. `Whateverest == zero expectations + all fun + some utility?`

## Developer notes

install all deps

```sh
yarn install
```

Build all:

```sh
yarn workspaces run build
# yarn build
```

bump the lerna version

```sh
npx lerna version
```

publish

```sh
npx lerna publish
```

Run the local server:

```sh
yarn serve
```

check out some of the demos

- http://localhost:8080/packages/whateverest-random-walk/examples/random-walk--browser/index.html
- http://localhost:8080/packages/whateverest-vector/examples/acceleration.html

Upgrading dev dependencies

```sh
yarn upgrade-interactive --latest
```
