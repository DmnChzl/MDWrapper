const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': WARNING,
    'no-console': OFF,
    'no-mixed-spaces-and-tabs': WARNING,
    'no-unused-vars': WARNING,
    'react/prop-types': ERROR
  },
  settings: {
    react: {
      version: '16.0'
    }
  }
};
