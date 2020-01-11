"use strict";

module.exports = async function(fastify, opts) {
  fastify.get("/users", async function(request, reply) {
    console.log(fastify.knex); // Knex DB instance
    // reply.notFound()
    //throw fastify.httpErrors.notFound()

    return "/users";
  });
};
