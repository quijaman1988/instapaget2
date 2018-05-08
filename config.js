module.exports = function() {
  switch (process.env.NODE_ENV) {
  case 'testing':
      return {
          ENV: 'testing',
          PORT: process.env.APP_PORT || 3000,
          DB_PATH: process.env.MONGO_DB,
      };
  case 'development':
      return {
          ENV: 'development',
          PORT: process.env.APP_PORT || 3000,
          DB_PATH: process.env.MONGO_DB,
          LOG_DIRECTORY: process.env.EDLIO_IMAGES_LOG_DIRECTORY
      };
  default:
    throw new Error("Set up NODE_ENV environment variable");
  }
}
