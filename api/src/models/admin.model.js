const client = require("../db");

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
      const { firstName, lastName, email, userName, password } = data;
      const result = await conn.query(
        "INSERT INTO admin ( firstName , lastName , userName , email , password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [firstName, lastName, userName, email, password]
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
      const { firstName, lastName, userName, email, password } = data;
      const result = await conn.query(
        "UPDATE admin SET firstName = $1, lastName = $2, userName = $3, email = $4, password = $5  WHERE id = $6 RETURNING *",
        [firstName, lastName, userName, email, password, id]
      );
      return result.rows[0];
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
