const { Pool } = require("pg");
require("dotenv").config();

// Create a pool of PostgreSQL connections
const client = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  port: 5432,
  ssl: true,
  max: 20, // set pool max size to 20
  idleTimeoutMillis: 5000, // close idle clients after 1 second
  connectionTimeoutMillis: 5000, // return an error after 1 second if connection could not be established
  maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});

module.exports = client;
