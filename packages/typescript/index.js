const javascript = require('@prazdevs/eslint-config-javascript')

module.exports = {
  extends: [
    '@prazdevs/eslint-config-javascript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // eslint rules
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'func-call-spacing': 'off',
    'indent': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',

    // extension rules
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true },
    ],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': [
      'error',
      2,
      { SwitchCase: 1, VariableDeclarator: 'first', outerIIFEBody: 1 },
    ],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],

    // typescript
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
  },
  overrides: [
    ...javascript.overrides,
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
