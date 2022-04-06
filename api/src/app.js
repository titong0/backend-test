const { server } = require("./index");
require("./schemas");

const productsRoutes = require("./routes/products.routes");

productsRoutes.forEach((route) => server.route(route));
