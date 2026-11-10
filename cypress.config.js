//Run settings
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl: "https://www.saucedemo.com/",

    specPattern: "cypress/e2e/**/*.cy.js",

    watchForFileChanges: false,

    defaultCommandTimeout: 8000,

    pageLoadTimeout: 60000,

    viewportWidth: 1280,

    viewportHeight: 720,

    screenshotOnRunFailure: true,

    video: false,

    retries: {
    runMode: 1, 
    openMode: 0, 
},
  },
});
