const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/Integration/examples/*.js"
  },
  env:{
    url:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
