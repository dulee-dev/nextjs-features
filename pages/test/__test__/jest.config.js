const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  rootDir: "../../../",
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ["<rootDir>/pages/test/__test__/jest.setup.ts"],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
}

module.exports = createJestConfig(customJestConfig)