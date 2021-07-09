# Vue (w/ TypeScript)

Get this config by extending [`@prazdevs/eslint-config-vue`](https://www.npmjs.com/package/@prazdevs/eslint-config-vue).

> _Only looking for TypeScript linting? Check out [`@prazdevs/eslint-config-typescript`](https://github.com/prazdevs/eslint-config/blob/main/packages/typescript)._

## Prerequisites
___
This config needs the following dependencies installed:
```js
'eslint': '>=7.30.0',
```

## Plugins
___
This config uses the following plugins:
```js
'vue',
'cypress',
```

## Extends
___
This config extends the following configs:
```js
'plugin:vue/vue3-recommended',
'plugin:cypress/recommended',
'plugin:vuejs-accessibility/recommended',
'@prazdevs/eslint-config-typescript',
```

## Rules
___
This config adds/modifies the following rules:
```js
'vue/max-attributes-per-line': ['error', { singleline: 2 }],
'vue/max-len': 'error',
'vuejs-accessibility/label-has-for': 'off', // this one is buggy.
```