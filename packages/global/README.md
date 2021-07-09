# ESLint config w/ Prettier formatting

Get this config by extending [`@prazdevs/eslint-config`](https://www.npmjs.com/package/@prazdevs/eslint-config).

> _Not interested in Prettier formatting? Check out [`@prazdevs/eslint-config-vue`](https://github.com/prazdevs/eslint-config/blob/main/packages/vue)._

## Prerequisites
___
This config needs the following dependencies installed:
```js
'eslint': '>=7.30.0',
'prettier': '>=2.3.2',
```

## Plugins
___
This config uses the following plugins:
```js
'prettier',
```

## Extends
___
This config extends the following configs:
```js
'@prazdevs/eslint-config-vue', 
'plugin:prettier/recommended'
```

## Rules
___
This config adds/modifies the following rules:
```js
// prettier config
'prettier/prettier': [
  'error',
  {
    arrowParens: 'avoid',
    proseWrap: 'always',
    quoteProps: 'consistent',
    semi: false,
    singleQuote: true,
  },
],
```

_Note: using this config will disable most of `@prazdevs/eslint-config-javascript` stylistic rules as Prettier now handles them._
