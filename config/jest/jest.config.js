module.exports = {
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  testMatch: [
    '**/*.test.js'
  ],
  rootDir: '../../',
  testEnvironmentOptions: {
    url: 'http://localhost'
  }
}
