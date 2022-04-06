const { Schema, model } = require("mongoose");


const productSchema = new Schema(
  {
    name: String,
    price: Number,
    Image: String,
    description: String,
    Stock: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Product", productSchema);
