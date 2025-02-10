# Whateverest

A monorepo of ideas. Mostly random tools and packages and whatever. Whateverest is an excuse to learn through making, using yarn workspaces to try to manage the randomness. `Whateverest == zero expectations + all fun + some utility?`

## Developer notes

While in the root...

### Install all deps

```sh
npm install
```

### Build all:

```sh
npm run build
```

bump the lerna version

```sh
npx lerna version
```

### publish

```sh
npx lerna publish
```

### Run the local server:

```sh
npm run serve
```

check out some of the demos

- http://localhost:8080/packages/whateverest-random-walk/examples/random-walk--browser/index.html
- http://localhost:8080/packages/whateverest-vector/examples/acceleration.html

Checking for outdated packages

```sh
npx npm-check
```
