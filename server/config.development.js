module.exports = {
  "host": (process.env.VCAP_APP_HOST || "0.0.0.0"),
  "port": (process.env.VCAP_APP_PORT || 3000),
};