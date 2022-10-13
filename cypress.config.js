const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  urlBase: 'https://buger-eats-qa.vercel.app',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
