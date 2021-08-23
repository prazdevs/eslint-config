module.exports = {
  env: {
    'cypress/globals': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:cypress/recommended',
    '@prazdevs/eslint-config-typescript',
  ],
  rules: {
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
        'vuejs-accessibility/label-has-for': 'off', //? this shit is buggy AF
      },
    },
  ],
}
