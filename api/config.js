const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 5000;
const db = process.env.DB || "mongodb://localhost/no-se";

module.exports = {
  host,
  port,
  db,
};
