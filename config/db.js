module.exports = function() {
  return {
    mysql: {
      client: process.env.DB_CONNECTION,
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      }
    },
    pg: {
      client: process.env.DB_CONNECTION,
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      }
    }
  };
};
