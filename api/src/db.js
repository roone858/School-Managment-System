const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

// Create a pool of PostgreSQL connections
const client = new Pool({
  user: "postgres",
  host: process.env.HOST,
  database: "school",
  password: "1234",
  port: process.env.PORT,
});

module.exports = client;
