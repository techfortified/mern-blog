module.exports = {
  port: parseInt(process.env.PORT, 10) || 5000,

  host: process.env.NODE_ENV === "production" ? "localhost" : "localhost",

  appUrl:
    process.env.NODE_ENV === "production"
      ? process.env.REMOTE_API_URL
      : process.env.LOCAL_API_URL,

  mongo: {
    mongodb_uri:
      process.env.NODE_ENV === "production"
        ? process.env.MONGO_DB_REMOTE_URL
        : process.env.MONGO_DB_LOCAL_URL,
  },
  allowedDomains:
    process.env.NODE_ENV === "production"
      ? [
          process.env.API_DOMAIN,
          process.env.MAIN_DOMAIN,
          process.env.REMOTE_SITE_URL,
        ]
      : [
          process.env.API_DOMAIN,
          process.env.MAIN_DOMAIN,
          process.env.LOCAL_SITE_URL,
          process.env.LOCAL_API_URL,
        ],
};
