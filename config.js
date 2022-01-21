const { version } = require("./package.json");

const nodeEnv = process.env.NODE_ENV || "development";
const gitCommit = process.env.COMMIT_REF || null;

module.exports = {
  isDevelopment: nodeEnv === "development",
  gitCommit,
  version,
  node: {
    env: nodeEnv,
  },
};
