const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  rootDir: "../../../",
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ["<rootDir>/pages/test/__test__/jest.setup.ts"],
  testEnvironment: 'jest-environment-jsdom',
  // testMatch: [ "**/use-input-text.spec.[jt]s?(x)" ],
  testMatch: [ "**/puppeteer.spec.[jt]s?(x)" ],
}

module.exports = createJestConfig(customJestConfig)