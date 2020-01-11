"use strict";

const Path = require("path");
const Autoload = require("fastify-autoload");

module.exports = function(fastify, opts, next) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  console.log("path");
  fastify.register(Autoload, {
    dir: Path.join(__dirname, "/../../plugins"),
    options: Object.assign({}, opts)
  });

  // This loads all plugins defined in services
  // define your routes in one of these
  //   fastify.register(Autoload, {
  //     dir: Path.join(__dirname, "services"),
  //     options: Object.assign({}, opts)
  //   });

  // Make sure to call next when done
  next();
};
