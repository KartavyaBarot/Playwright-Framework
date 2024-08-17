const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on',
      },
    },
  ],
});
