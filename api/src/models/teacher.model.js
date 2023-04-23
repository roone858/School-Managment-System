const client = require("../db");

// Define the model for the "Teachers" table
const Teacher = {
  // Fetch all Teachers from the database
  getAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM Teacher");
      return result.rows;
    } finally {
      conn.release();
    }
  },

  // Fetch a specific Teacher by ID from the database
  getById: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM Teacher WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Create a new Teacher in the database
  create: async (data) => {
    const conn = await client.connect();
    try {
      const {name, email, gender, phone, dob, address } = data;
      const result = await conn.query(
        "INSERT INTO Teacher (name, email, gender, phone, dob, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [name, email, gender, phone, dob, address]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Update an existing Teacher in the database
  update: async (id, data) => {
    const conn = await client.connect();
    try {
      const {name, email, gender, phone, dob, address } = data;
      const result = await conn.query(
        "UPDATE Teacher SET name = $1, email = $2, gender = $3, phone = $4, dob = $5, address = $6 WHERE id = $7 RETURNING *",
        [name, email, gender, phone, dob, address, id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Delete a Teacher from the database
  delete: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM Teacher WHERE id = $1", [
        id,
      ]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  },
};

module.exports = {
  Teacher,
};
