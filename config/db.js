module.exports = {
  properties: {
    mysql: {
      type: "object",
      default: {
        client: process.env.DB_CONNECTION || "mysql",
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      }
    },
    pg: {
      type: "object",
      default: {
        client: process.env.DB_CONNECTION || "pg",
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      }
    }
  }
};
