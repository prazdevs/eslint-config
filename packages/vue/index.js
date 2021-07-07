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
        'vuejs-accessibility/label-has-for': 'off', // ? this shit is buggy AF
      },
    },
  ],
}
