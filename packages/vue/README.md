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
'vue/attributes-order': ['error', { alphabetical: true }],
'vue/block-tag-newline': [
  'error',
  { singleline: 'always', multiline: 'always' },
],
'vue/max-attributes-per-line': ['error', { singleline: 2 }],
'vue/max-len': 'error',
'vue/no-empty-component-block': 'error',
'vue/no-export-in-script-setup': 'error',
'vue/no-reserved-component-names': [
  'error',
  { disallowVue3BuiltInComponents: true },
],
'vue/no-template-target-blank': 'error',
'vue/no-useless-mustaches': 'error',
'vue/no-useless-v-bind': 'error',
'vue/padding-line-between-blocks': 'error',
'vue/valid-define-emits': 'error',
'vue/valid-define-props': 'error',
'vue/valid-v-memo': 'error',
```