// npx cypress run --record --key b57c8813-d09d-4baa-8d1f-e2ddeb129388
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "a5d2r8",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
