const Product = require("../models/product.model");

const deleteAll = async () => {
  const all = await Product.find();
  all.forEach((i) =>
    Product.findByIdAndDelete(i._id).then((i) => console.log("deleted", i))
  );
};
// deleteAll();

const getProducts = (req, reply) => {
  const products = Product.find();
  return products;
};

const getProductById = (req, reply) => {
  const product = Product.findById(req.params.id);
  return product;
};

const createProduct = async (req, reply) => {
  const { body } = req;
  const newProduct = new Product(body);
  try {
    await newProduct.save();
    reply.code(201).send(newProduct);
  } catch (err) {
    reply.send(err);
  }
};

const deleteProduct = async (req, reply) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    reply.code(202).send(`Successfully deleted ${req.params.id}`);
  } catch (error) {
    reply.code(404).send(`Couldnt delete`);
  }
};

const editProduct = async (req, reply) => {
  try {
    await Product.updateOne({ id: req.params.id }, req.body);
    reply.send(`edited ${req.params.id}`);
  } catch (error) {
    reply.code(404).send(`Couldnt edit ${req.params.id}`);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  editProduct,
};
