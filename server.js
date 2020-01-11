"use strict";

/*

| Http server
| -----------
|
| Bootstrap and start fastify. 
| Normally, you would not need to change this file. But, you could.
|
*/

// Read .env file.
require("dotenv").config();

// Require the framework
const Fastify = require("fastify");

// Instantiate Fastify with some config
const app = Fastify({
  logger: process.env.LOGGER,
  pluginTimeout: 10000
});

// Register your application as a normal plugin.
app.register(require("./boot/app.js"));

// Start listening.
app.listen(process.env.PORT || 3000, err => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
