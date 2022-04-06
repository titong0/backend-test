const fastify = require("fastify").default({});
const config = require("../config");
require("./utils/mongoose");
const createProduct = require("./utils/createProduct");

const start = async () => {
  await fastify.listen(config.port, config.host);
};
start();

module.exports.server = fastify;

require("./schemas");
require("./app");
