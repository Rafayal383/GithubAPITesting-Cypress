const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config){
  screenshotOnRunFailure = true; //FOR HTML REPORTS
  require("cypress-mochawesome-reporter/plugin")(on); //FOR HTML REPORTS
  return config ;
}
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", //FOR GENERATING HTML REPORT
  e2e: {
    setupNodeEvents,
    specPattern : 'cypress/TestingAPI/*.js'
  },
  chromeWebSecurity : false
});
