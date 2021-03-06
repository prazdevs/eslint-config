# JavaScript

Get this config by extending [`@prazdevs/eslint-config-javascript`](https://www.npmjs.com/package/@prazdevs/eslint-config-javascript).

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
'unicorn',
'import',
'jsonc',
'yml',
```
_Note: it also uses peer plugins._

## Extends
___
This config extends the following configs:
```js
'standard',
'plugin:import/recommended',
'plugin:jsonc/recommended-with-json',
'plugin:yml/standard',
```

## Rules
___
This config adds/modifies the following rules:
```js
// possible errors
'no-cond-assign': ['error', 'always'],
'no-console': 'warn',
'no-constant-condition': 'warn',
'no-debugger': 'warn',

// best practices
'array-callback-return': 'error',
'block-scoped-var': 'error',
'curly': ['error', 'multi-or-nest', 'consistent'],
'eqeqeq': ['error', 'smart'],
'no-alert': 'warn',
'no-case-declarations': 'error',
'no-multi-spaces': 'error',
'no-multi-str': 'error',
'no-return-assign': 'error',
'no-return-await': 'error',
'no-void': 'error',
'no-with': 'error',
'require-await': 'error',

// variables
'no-unused-vars': 'warn',

// stylistic issues
'array-bracket-newline': ['error', 'consistent'],
'array-bracket-spacing': ['error', 'never'],
'array-element-newline': ['error', 'consistent'],
'block-spacing': ['error', 'always'],
'brace-style': ['error', '1tbs', { allowSingleLine: true }],
'camelcase': 'off',
'comma-dangle': ['error', 'always-multiline'],
'comma-spacing': ['error', { before: false, after: true }],
'comma-style': ['error', 'last'],
'func-call-spacing': ['error', 'never'],
'indent': [
  'error',
  2,
  { SwitchCase: 1, VariableDeclarator: 'first', outerIIFEBody: 1 },
],
'max-len': ['error', { tabWidth: 2 }],
'no-lonely-if': 'error',
'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement'],
'object-curly-newline': ['error', { consistent: true, multiline: true }],
'object-curly-spacing': ['error', 'always'],
'object-property-newline': [
  'error',
  { allowAllPropertiesOnSameLine: true },
],
'operator-linebreak': ['error', 'before'],
'quote-props': ['error', 'consistent-as-needed'],
'quotes': ['error', 'single'],
'semi': ['error', 'never'],
'space-before-function-paren': ['error', 'always'],
'spaced-comment': [
  'error',
  'always',
  { markers: ['?', '!', '//', '*', '/'] },
],

// ecmascript 6
'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
'generator-star-spacing': ['error', { before: false, after: true }],
'no-var': 'error',
'object-shorthand': [
  'error',
  'always',
  { ignoreConstructors: false, avoidQuotes: true },
],
'prefer-arrow-callback': [
  'error',
  { allowNamedFunctions: false, allowUnboundThis: true },
],
'prefer-const': [
  'error',
  { destructuring: 'any', ignoreReadBeforeAssign: true },
],
'prefer-rest-params': 'error',
'prefer-spread': 'error',
'prefer-template': 'error',
'template-curly-spacing': ['error', 'never'],

// import
'import/first': 'error',
'import/newline-after-import': 'error',
'import/no-absolute-path': 'off',
'import/no-mutable-exports': 'error',
'import/no-unresolved': 'off',
'import/order': [
  'error',
  {
    'groups': [
      ['builtin', 'external'],
      'internal',
      'type',
      ['parent', 'sibling', 'index'],
    ],
    'alphabetize': { order: 'asc', caseInsensitive: true },
    'newlines-between': 'always',
  },
],

// yml
'yml/sort-keys': 'error',

// jsonc
'jsonc/array-bracket-newline': ['error', 'consistent'],
'jsonc/array-bracket-spacing': ['error', 'never'],
'jsonc/comma-style': ['error', 'last'],
'jsonc/indent': ['error', 2],
'jsonc/key-spacing': [
  'error',
  { beforeColon: false, afterColon: true, mode: 'strict' },
],
'jsonc/object-curly-newline': ['error', { consistent: true }],
'jsonc/object-curly-spacing': ['error', 'always'],
'jsonc/sort-keys': 'error',

// unicorn
'unicorn/better-regex': 'error',
'unicorn/consistent-destructuring': 'error',
'unicorn/consistent-function-scoping': 'warn',
'unicorn/empty-brace-spaces': 'error',
'unicorn/error-message': 'warn',
'unicorn/no-abusive-eslint-disable': 'error',
'unicorn/no-instanceof-array': 'error',
'unicorn/no-lonely-if': 'error',
'unicorn/no-new-array': 'error',
'unicorn/no-new-buffer': 'error',
'unicorn/no-unreadable-array-destructuring': 'error',
'unicorn/no-unsafe-regex': 'warn',
'unicorn/no-useless-length-check': 'error',
'unicorn/no-useless-spread': 'error',
'unicorn/no-zero-fractions': 'error',
'unicorn/number-literal-case': 'error',
'unicorn/prefer-array-find': 'error',
'unicorn/prefer-array-index-of': 'error',
'unicorn/prefer-array-some': 'error',
'unicorn/prefer-date-now': 'error',
'unicorn/prefer-default-parameters': 'error',
'unicorn/prefer-includes': 'error',
'unicorn/prefer-negative-index': 'error',
'unicorn/prefer-prototype-methods': 'error',
'unicorn/prefer-string-starts-ends-with': 'error',
'unicorn/prefer-type-error': 'error',
```

_Note: `package.json` files are sorted in a particular way not documented here, if you're that curious, you can still check it out [here](https://github.com/prazdevs/eslint-config/blob/main/packages/javascript/index.js#L168)._
