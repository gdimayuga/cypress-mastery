// npx cypress run --record --key b57c8813-d09d-4baa-8d1f-e2ddeb129388
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "a5d2r8",
  experimentalStudio: true,
  viewportHeight:1080,
  viewportWidth:1920,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
