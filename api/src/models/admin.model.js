const client = require("../db");
const bcrypt = require("bcrypt");
require("dotenv").config()


// Define the model for the "admin" table
class AdminMethods {
  // Fetch all admin from the database
  async getAll() {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM admin");
      return result.rows;
    } finally {
      conn.release();
    }
  }

  // Fetch a specific admin by ID from the database
  async getById(id) {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM admin WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async getByUsername(username) {
    const sql = `SELECT * FROM admin WHERE username ='${username}' ;`;
    const conn = await client.connect();
    const result = await conn.query(sql);
    conn.release();

    return result.rows[0];
  }

  // Create a new admin in the database
  async create(data) {
    const conn = await client.connect();
    try {
      const { first_name, last_name, email, username, password } = data;

      const salt = bcrypt.genSaltSync(Number(process.env.saltRounds));
      const hash = bcrypt.hashSync(
        password + process.env.PASSWORD_HASH_KEY,
        salt
      );

      const result = await conn.query(
        "INSERT INTO admin ( first_name , last_name , username , email , password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [first_name, last_name, username, email, hash]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  // Update an existing admin in the database
  async update(id, data) {
    const conn = await client.connect();
    try {
      const { first_name, last_name, userName, email, password } = data;
      const result = await conn.query(
        "UPDATE admin SET first_name = $1, last_name = $2, userName = $3, email = $4, password = $5  WHERE id = $6 RETURNING *",
        [first_name, last_name, userName, email, password, id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  async updatePassword(username, data) {
    const conn = await client.connect();
    try {
      const { oldPassword, newPassword } = data;
      const admin = await this.getByUsername(username);
      const isPasswordValid = bcrypt.compareSync(
       oldPassword +   process.env.PASSWORD_HASH_KEY ,
        admin.password
      );
      if (isPasswordValid) {
        const hash = bcrypt.hashSync(   newPassword + process.env.PASSWORD_HASH_KEY,Number(process.env.saltRounds))
        const result = await conn.query(
          "UPDATE admin SET password = $1  WHERE username = $2 RETURNING *",
          [hash, username]
        );
        return result.rows[0];
      }
      throw new Error();
    } finally {
      conn.release();
    }
  }

  // Delete a admin from the database
  async delete(id) {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM admin WHERE id = $1", [id]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = {
  AdminMethods,
};
