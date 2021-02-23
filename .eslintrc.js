module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'eslint-plugin-import': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'eslint-disable no-spaced-func': 0,
    'linebreak-style': 0,
  },

  // 'import/no-unresolved': [
  //   2,
  //   { caseSensitive: false },
  // ],
};
