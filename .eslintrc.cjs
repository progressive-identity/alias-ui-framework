/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript',
    'prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': ['error'],
    'semi': [2, 'never'],
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore'
    }],
    'vue/no-mutating-props': 'off',
    'vue/v-on-event-hyphenation': 'error'
  }
}
