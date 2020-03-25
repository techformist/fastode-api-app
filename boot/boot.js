"use strict";

const Autoload = require("fastify-autoload");
const path = require("path");

module.exports = function(fastify, opts, next) {
  /*
   * Your custom boot-time code goes in `boot/boot.js`.
   * You can use this to do custom plugin registrations, or
   * whatever catches your fancy.
   *
   */

  /*
   * Load a bunch of pre-decided plugins from plugins directory.
   * Plugins can be used throughout your app.
   *
   *
   */

  // Load dotenv - at the beginning of everything
  const fastifyEnv = require("fastify-env");

  const envSchema = require("../config/env");
  fastify
    .register(fastifyEnv, {
      schema: envSchema,
      dotenv: true
    })
    .ready(err => {
      if (err) console.error(err);
    });

  const dbSchema = require("../config/db");
  fastify
    .register(fastifyEnv, {
      schema: dbSchema,
      confKey: "dbconfig",
      dotenv: true
    })
    .ready(err => {
      if (err) console.error(err);
    });

  const corsSchema = require("../config/cors");
  fastify
    .register(fastifyEnv, {
      schema: corsSchema,
      confKey: "corsconfig",
      dotenv: true
    })
    .ready(err => {
      if (err) console.error(err);
    });

  fastify.register(require("../node_modules/fastode/boot/boot"));

  /*
   * Register custom plugins.
   * Just drop your plugins in <root>/plugins folder.
   */
  fastify.register(Autoload, {
    dir: path.join(__dirname, "../", "plugins"),
    options: Object.assign({}, opts)
  });

  /*
   * Call next at the last
   */
  next();
};
