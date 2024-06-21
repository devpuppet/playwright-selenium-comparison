import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  rootDir: './tests/selenium',
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  reporters: [
    'default',
    ['jest-html-reporter', {
      outputPath: "./selenium-report/report.html",
      pageTitle: "Selenium 4 Test Results",
      includeFailureMsg: true
    }]
  ]
};

export default config;