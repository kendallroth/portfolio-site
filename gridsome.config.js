require("dotenv").config();

const merge = require("webpack-merge");
const path = require("path");

const Paths = {
  src: path.join(__dirname, "src"),
  styles: path.join(__dirname, "src", "assets", "styles"),
};

const siteName = "Kendall Roth - Portfolio";

// Provide specified variable/mixin SCSS files to all components
// Taken from: https://gridsome.org/docs/assets-css/#global-preprocessor-files-ie-variables-mixins
const globalScssFiles = ["_vars", "_breakpoints", "_mixins"];
const globalScssPaths = globalScssFiles.map((f) =>
  path.resolve(`./src/assets/styles/${f}.scss`),
);
function addStyleResource(rule) {
  rule.use("style-resource").loader("style-resources-loader").options({
    patterns: globalScssPaths,
  });
}

module.exports = {
  siteName,
  siteUrl: "https://kendallroth.ca",
  titleTemplate: "%s",
  icon: "./src/favicon.png",
  plugins: [],
  chainWebpack(config) {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
      addStyleResource(config.module.rule("sass").oneOf(type));
    });
  },
  configureWebpack(config) {
    return merge(
      {
        resolve: {
          alias: {
            "@": Paths.src,
            "@assets": path.join(Paths.src, "assets"),
            "@config": path.join(Paths.src, "../config.js"),
            "@components": path.join(Paths.src, "components"),
            "@layouts": path.join(Paths.src, "layouts"),
            "@pages": path.join(Paths.src, "pages"),
            "@styles": path.join(Paths.src, "assets", "styles"),
            "@templates": path.join(Paths.src, "templates"),
            "@utilities": path.join(Paths.src, "utilities"),
          },
        },
      },
      config,
    );
  },
};
