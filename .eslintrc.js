module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly'
    },
    extends: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
