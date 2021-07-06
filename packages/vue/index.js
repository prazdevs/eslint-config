module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@prazdevs/eslint-config-typescript',
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 2 }],
    'vue/max-len': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      plugins: ['vuejs-accessibility'],
      extends: ['plugin:vuejs-accessibility/recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        // 'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
