const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',

    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  transformIgnorePatterns: [
    // Add regular expressions to match the paths or filenames you want to ignore.
    '/node_modules/nanoid/index.browser.js',
  ],
}


// "transform": {
//   "^.+\\.js$": "babel-jest",
//     "^.+\\.jsx$": "babel-jest"
// }
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)