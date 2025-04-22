// npx cypress run --record --key b57c8813-d09d-4baa-8d1f-e2ddeb129388
const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const dotenv = require("dotenv");
require("dotenv").config();

module.exports = defineConfig({
  projectId: "a5d2r8",
  experimentalStudio: true,
  retries: 3,
  // testIsolation: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    projectName: process.env.PROJECT_NAME || "Cypress Test Automation",
    environment: process.env.ENVIRONMENT || "QA",
    API_KEY: process.env.API_KEY,
    API_BASE_URL: process.env.API_BASE_URL || 'https://petstore.swagger.io/v2',
  },
  e2e: {
    baseUrl: process.env.API_BASE_URL || 'https://petstore.swagger.io/v2',
    //testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', async (details) => {
        console.log('override before:run');
        console.log('Running tests');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
});
