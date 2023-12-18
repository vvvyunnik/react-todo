const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    supportFile: false
  },
});
