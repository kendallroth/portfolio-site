const nodeEnv = process.env.NODE_ENV || "development";

module.exports = {
  isDevelopment: nodeEnv === "development",
  node: {
    env: nodeEnv,
  },
};
