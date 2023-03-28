const { Pool } = require("pg");
require('dotenv').config()
console.log(process.env.DATABASE_USERNAME)

// Create a pool of PostgreSQL connections
const client = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.HOST,
  database:  process.env.DATABASE,
  password:  process.env.PASSWORD,
  port: process.env.PORT,
});

module.exports = client;
