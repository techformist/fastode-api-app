"use strict";

const path = require("path");
const Autoload = require("fastify-autoload");

module.exports = function(fastify, opts, next) {
  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(Autoload, {
    dir: path.join(__dirname, "app/services"),
    options: Object.assign({}, opts)
  });

  // Call next when done
  next();
};
