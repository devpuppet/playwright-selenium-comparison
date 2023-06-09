import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  rootDir: './tests/selenium',
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};

export default config;