const client = require("../db");

// Define the model for the "students" table
const Student = {
  // Fetch all students from the database
  getAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM student");
      return result.rows;
    } finally {
      conn.release();
    }
  },

  // Fetch a specific student by ID from the database
  getById: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM student WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Create a new student in the database
  create: async (data) => {
    const conn = await client.connect();
    try {
      const { firstName, lastName, email, gender, phone, dateOfBirth, address } = data;
      const result = await conn.query(
        "INSERT INTO student (firstName, lastName, email, gender, phone, dateOfBirth, address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [firstName, lastName, email, gender, phone, dateOfBirth, address]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Update an existing student in the database
  update: async (id, data) => {
    const conn = await client.connect();
    try {
      const { firstName, lastName, email, gender, phone, dateOfBirth, address } = data;
      const result = await conn.query(
        "UPDATE student SET firstName = $1, lastName = $2, email = $3, gender = $4, phone = $5, dateOfBirth = $6, address = $7 WHERE id = $8 RETURNING *",
        [firstName, lastName, email, gender, phone, dateOfBirth, address, id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Delete a student from the database
  delete: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM student WHERE id = $1", [
        id,
      ]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  },
};

module.exports = {
  Student,
};
