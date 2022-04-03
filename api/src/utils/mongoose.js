const config = require("../../config");
const mongoose = require("mongoose");

mongoose
  .connect(config.db)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
