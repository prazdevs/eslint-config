module.exports = {
  env: {
    es6: true,
    broswser: true,
    node: true
  },
  extends: [
    'standard',
  ],
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
    'no-return-await': 'error',
    'no-void': 'error',
    'no-with': 'error',


    // variables
    'no-unused-vars': 'warn',

    // stylistic issues
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'func-call-spacing': ['error', 'never'],
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 'first', outerIIFEBody: 1 }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement'],
    'object-curly-newline': ['error', { 'consistent': true }],
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],

    // ecmascript 6
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'generator-star-spacing': ['error', { before: false, after: true }], 
    'no-var': 'error',
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
  }
}