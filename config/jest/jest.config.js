module.exports = {
  collectCoverage: true,
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
