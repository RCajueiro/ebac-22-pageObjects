const { tr } = require("@faker-js/faker");
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "wjqs92",

  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
