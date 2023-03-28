const client = require("../db");

// Define the model for the "parents" table
const Parent = {
  // Fetch all parents from the database
  getAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM parent");
      return result.rows;
    } finally {
      conn.release();
    }
  },

  // Fetch a specific parent by ID from the database
  getById: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM parent WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Create a new parent in the database
  create: async (data) => {
    const conn = await client.connect();
    try {
      const {
        firstName,
        lastName,
        email,
        gender,
        phone,
        dateOfBirth,
        address,
      } = data;
      const result = await conn.query(
        "INSERT INTO parent (firstName, lastName, email, phoneNumber) VALUES ($1, $2, $3, $4) RETURNING *",
        [firstName, lastName, email, phone]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Update an existing parent in the database
  update: async (id, data) => {
    const conn = await client.connect();
    try {
      const { firstName, lastName, email, phone } = data;
      const result = await conn.query(
        "UPDATE parent SET firstName = $1, lastName = $2, email = $3, phoneNumber = $4 WHERE id = $5 RETURNING *",
        [firstName, lastName, email, phone, id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Delete a parent from the database
  delete: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM parent WHERE id = $1", [id]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  },
};

module.exports = {
  Parent,
};
