const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3000;
const db = process.env.DB || "mongodb://localhost/no-se";

module.exports = {
  host,
  port,
  db,
};