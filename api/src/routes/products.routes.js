const { server } = require("../index");
const productsCtrl = require("../controllers/product.controller");
/**
 * @type {import("fastify").RouteOptions<Server, IncomingMessage, ServerResponse, RouteGenericInterface, unknown, FastifySchema>[]}
 */

const routes = [
  {
    url: "/products",
    method: "GET",
    handler: productsCtrl.getProducts,
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: productsCtrl.getProductById,
  },
  {
    url: "/products",
    method: "POST",
    schema: {
      body: server.getSchema("postProduct"),
    },
    handler: productsCtrl.createProduct,
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productsCtrl.deleteProduct,
  },
  {
    url: "/products/:id",
    method: "PUT",
    schema: {
      body: server.getSchema("putProduct"),
    },
    handler: productsCtrl.editProduct,
  },
];

module.exports = routes;
