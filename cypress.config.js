/// <reference types="@shelex/cypress-allure-plugin" />

const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = {
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 3000, //by default it is 4000 (4 sec)
    //pageLoadTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      allureWriter(on, config);
      return config;
    },
    specPattern: "cypress/e2e/*.feature",
  },
};
