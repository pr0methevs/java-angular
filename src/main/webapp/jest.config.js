// module.exports = {
//     preset: 'jest-preset-angular',
//     setupFilesAfterEnv: ['./setup-jest.ts'],
//     globalSetup: 'jest-preset-angular/global-setup',
//     testPathIgnorePatterns: [
//       './node_modules/',
//       './dist/'
//     ],
//     coverageDirectory: './coverage/jest',
//     coverageReporters: ['html', 'text', 'text-summary'],
//     collectCoverageFrom: [
//       'src/app/**/*.ts',
//       '!src/app/**/*.module.ts',
//       '!src/app/**/*.stories.ts'
//     ]
//   };

  module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['./setup-jest.ts'],
    testPathIgnorePatterns: [
      './node_modules/',
      './dist/'
    ],
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.spec.json'
      }
    },
    testEnvironment: 'jsdom'
  };