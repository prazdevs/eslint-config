module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-json',
    'plugin:yml/standard',
  ],
  plugins: ['unicorn'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.ts', '.d.ts'],
      },
    },
  },
  rules: {
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
    // TODO 'unicorn/no-useless-length-check': 'error',
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
  },
  overrides: [
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'repository',
              'private',
              'license',
              'author',
              'main',
              'module',
              'types',
              'files',
              'bin',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      parser: 'yaml-eslint-parser',
    },
  ],
}
