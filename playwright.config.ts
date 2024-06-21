import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/playwright',
  timeout: 2 * 60 * 1000,
  use: {
    headless: true,
    trace: 'on',
    screenshot: 'on'
  },
  reporter: [
      [ 'html', { open: 'never' }],
      [ 'junit', { outputFile: 'playwright-report/e2e-junit-results.xml' }]
  ]
});

