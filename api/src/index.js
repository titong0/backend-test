const fastify = require("fastify")({ logger: true });
const productsRoutes = require("./routes/products.routes");
const config = require("../config");
require("./utils/mongoose");

fastify.get("/", (req, res) => {
  res.send({ hola: "no" });
});

productsRoutes.forEach((route) => fastify.route(route));

const start = async () => {
  await fastify.listen(config.port);
  fastify.log.info(`server listening on ${fastify.server.address()}`);
};

start();
