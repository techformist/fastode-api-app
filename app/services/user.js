"use strict";

module.exports = async function(fastify, opts) {
  fastify.get("/users", async function(request, reply) {
    return { users: [{ name: "user1", name: "user2" }] };
  });
};
