import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.API_URL || "http://localhost:5000";

export default {
  API_URL,
};
