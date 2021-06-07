module.exports = {
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testMatch: [
    '**/*.test.js'
  ],
  rootDir: '../../',
  testURL: 'http://localhost'
}
