import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/playwright',
  timeout: 2 * 60 * 1000,
  use: {
    headless: false
  },
  reporter: [[ 'html', { open: 'never' }]]
});

