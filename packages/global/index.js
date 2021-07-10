module.exports = {
  extends: ['@prazdevs/eslint-config-vue', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        endOfLine: 'auto',
        proseWrap: 'always',
        quoteProps: 'consistent',
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
