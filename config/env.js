"use strict";

module.exports = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: { type: "string", default: 3000 },
    LOGGER: { type: "boolean", default: false },
    DB_CONNECTION: { type: "string", default: "pg" },
    DB_HOST: { type: "string", default: "localhost" },
    DB_PORT: { type: "string", default: "5432" },
    DB_USER: { type: "string", default: "root" },
    DB_PASSWORD: { type: "string", default: "" },
    DB_DATABASE: { type: "string", default: "pg" },
    DISABLE_PLUGIN: { type: "string", default: "" },
    HASH_DRIVER: { type: "string", default: "" },
    APP_KEY: { type: "string", default: "" }
  }
};
