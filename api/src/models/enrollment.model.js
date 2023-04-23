const client = require("../db");

// Define the model for the "enrollments" table
const Enrollment = {
  // Fetch all enrollments from the database
  getAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM enrollment");
      return result.rows;
    } finally {
      conn.release();
    }
  },

  // Fetch a specific enrollment by ID from the database
  getById: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "SELECT * FROM enrollment WHERE id = $1",
        [id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Create a new enrollment in the database
  create: async (data) => {
    const conn = await client.connect();
    try {
      const { studentId, subjectId, enrollmentDate } = data;
      const result = await conn.query(
        "INSERT INTO enrollment (studentId, subjectId, enrollmentDate) VALUES ($1, $2, $3) RETURNING *",
        [studentId, subjectId, enrollmentDate]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Update an existing enrollment in the database
  update: async (id, data) => {
    const conn = await client.connect();
    try {
      const { studentId, subjectId, enrollmentDate } = data;
      const result = await conn.query(
        "UPDATE enrollment SET studentId = $1, subjectId = $2, enrollmentDate = $3 WHERE id = $4 RETURNING *",
        [studentId, subjectId, enrollmentDate, id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Delete an enrollment from the database
  delete: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM enrollment WHERE id = $1", [
        id,
      ]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  },
};

module.exports = {
  Enrollment,
};
