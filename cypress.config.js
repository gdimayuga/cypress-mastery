// npx cypress run --record --key d0457e00-4a25-4686-b7bc-cf5d8deb1aad
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "a5d2r8",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
