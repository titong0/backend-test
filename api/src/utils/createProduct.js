const { faker } = require("@faker-js/faker");

const { commerce } = faker;
const createProduct = () => {
  const product = {
    title: commerce.productName(),
    price: parseInt(commerce.price()),
    image: faker.image.business(),
    description: commerce.productDescription(),
    stock: faker.datatype.number({ max: 99 }),
  };
};

createProduct();

module.exports = createProduct;
