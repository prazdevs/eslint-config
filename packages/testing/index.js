module.exports = {
  env: {
    'cypress/globals': true,
  },
  extends: [
    '@prazdevs/eslint-config-typescript',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/recommended',
  ],
  plugins: [
    'cypress',
    'jest',
    'jest-formatting',
  ],
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/expect-expect': 'off',
    'jest/lowercase-name': ['error', { ignoreTopLevelDescribe: true }],
    'jest/no-duplicate-hooks': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/prefer-todo': 'error',
  },
}
