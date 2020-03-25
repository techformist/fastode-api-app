"use strict";

/*

| Http server
| -----------
|
| Bootstrap and start fastify. 
| Normally, you would not need to change this file. But, you could.
|
*/

// dotenv gets loaded here for start-up and in env-schema
// TODO: optimise?
require("dotenv").config();

const logger = process.env.LOGGER
  ? { level: process.env.LOGLEVEL ? process.env.LOGLEVEL : "error" }
  : false;

// Instantiate Fastify with some config
const Fastify = require("fastify");
const app = Fastify({
  logger: logger,
  pluginTimeout: 10000
});

// Register userland plugins and Fastode defaults as normal plugins
app.register(require("./boot/boot")).register(require("./app"));

// Start listening.
app.listen(process.env.PORT || 3000, err => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  } else console.info(`Server listening on ${app.server.address().port}`);
});
