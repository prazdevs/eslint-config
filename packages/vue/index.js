module.exports = {
  extends: [
    '@prazdevs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: [
    'vuejs-accessibility',
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 2 }],
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
