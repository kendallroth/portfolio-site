const { version } = require("./package.json");

const nodeEnv = process.env.NODE_ENV || "development";

module.exports = {
  isDevelopment: nodeEnv === "development",
  version,
  node: {
    env: nodeEnv,
  },
};
