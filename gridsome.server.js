// Data
const siteMetadata = require("./src/data/siteMetadata.json");

module.exports = function (api) {
  api.loadSource(({ addMetadata }) => {
    addMetadata("site", siteMetadata);
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
