const fastify = require("fastify").default({ logger: true });
const productsRoutes = require("./routes/products.routes");
const config = require("../config");
require("./utils/mongoose");

console.log(`



LOGS
${process.env.PORT}
${JSON.stringify(config, null, 2)}



`);

fastify.get("/", (req, res) => {
  res.send({ hola: "no" });
});
productsRoutes.forEach((route) => fastify.route(route));

const start = async () => {
  await fastify.listen(config.port, config.host);
};

start();
