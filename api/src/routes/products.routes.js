const productsCtrl = require("../controllers/product.controller");

const routes = [
  {
    url: "/",
    method: "GET",
    handler: (req, res) => {
      res.send("hola anda bien");
    },
  },
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
    handler: productsCtrl.editProduct,
  },
];
module.exports = routes;
