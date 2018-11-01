module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testMatch: [
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(css|scss)$': 'jest-css-modules'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@material)'
  ],
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js'
};
