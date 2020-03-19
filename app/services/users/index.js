"use strict";

module.exports = async function(fastify, opts) {
  fastify.get("/users", async function(request, reply) {
    console.log(fastify.knex); // Knex DB instance
    // reply.notFound()
    //throw fastify.httpErrors.notFound()

    //  const urlData = req.urlData()
    // req.log.info(urlData.path) // '/foo'
    // req.log.info(urlData.query) // 'a=b&c=d'
    // req.log.info(urlData.host) // '127.0.0.1'
    // GET: 'http://127.0.0.1:8080/foo?a=b&c=d

    return "/users";
  });
};
