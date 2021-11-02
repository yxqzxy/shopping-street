module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0,
    'eol-last': 0,
    'eol-last': 0,
    'comma-dangle': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'spaced-comment': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
