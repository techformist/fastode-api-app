"use strict";

module.exports = async function(fastify, opts) {
  fastify.setNotFoundHandler(function(request, reply) {
    reply
      .code(404)
      .type("application/json")
      .send({ message: "Requested todo item does not exist" });
  });

  fastify.get(
    "/",
    {
      //   preValidation: [fastify.authenticate]
    },
    async (request, reply) => {
      console.log("fastify.authenticate in route", fastify.authenticate);
      return [
        { desc: "abc", status: "done" },
        { desc: "xyz", status: "in progress" }
      ];
    }
  );
};

module.exports.autoPrefix = "/todo";
