const fastify = require("fastify")();
const productsRoutes = require("./routes/products.routes");
require("./utils/mongoose");

fastify.get("/", (req, res) => {
  res.send({ hola: "no" });
});

productsRoutes.forEach((route) => fastify.route(route));

const start = async () => {
  await fastify.listen(process.env.PORT);
  fastify.log.info(`server listening on ${fastify.server.address()}`);
};

start();
