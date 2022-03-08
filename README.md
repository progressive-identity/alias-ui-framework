# alias-ui-framework

## Documentation
https://app.archbee.io/docs/6vXxuWayHyUXAFLWPyfZv/x9rQa08tZU6ror7lPO4cD

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## How to use this project as a local dependency on another project

First ensure that both projects uses the same node version, for that you can use the following command into both
projects :

```
node -v
```

Now place yourself into the project alias-ui-framework and use npm link :

```
npm link
```

Then place yourself into the project where you which to use alias-ui-framework and import it as a dependency :

```
npm i @alias-code-is-law/alias-ui-framework
```

Finally, link the dependency to the local files

```
npm link "@alias-code-is-law/alias-ui-framework"
```

## Special Directories

### `assets`

The assets directory contains your uncompiled assets such as css files, images, or fonts.

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be
reused and imported into your pages, layouts and even other components.

### `public`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/public/robots.txt` is mapped as `/robots.txt`.

### `stories`

Not used for now, it's related to storybook.
