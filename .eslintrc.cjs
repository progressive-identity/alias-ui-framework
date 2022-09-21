/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier", "standard", "prettier"
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "prettier/prettier": ["error"],
    "semi": [2, "never"],
    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
}]

  }
}
