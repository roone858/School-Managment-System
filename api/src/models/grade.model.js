const client = require("../db");

// Define the model for the "Grades" table
const Grade = {
  // Fetch all Grades from the database
  getAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM Grade");
      return result.rows;
    } finally {
      conn.release();
    }
  },

  // Fetch a specific Grade by ID from the database
  getById: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "SELECT * FROM Grade WHERE id = $1",
        [id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Create a new Grade in the database
  create: async (data) => {
    const conn = await client.connect();
    try {
      const { studentId, subjectId ,overall_grade} = data;
      const result = await conn.query(
        "INSERT INTO Grade (student_Id, subject_Id,overall_grade) VALUES ($1, $2, $3) RETURNING *",
        [studentId, subjectId, overall_grade]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Update an existing Grade in the database
  update: async (id, data) => {
    const conn = await client.connect();
    try {
      const { studentId, subjectId ,overall_grade} = data;
      const result = await conn.query(
        "UPDATE Grade SET studentId = $1, subjectId = $2, overall_grade = $3, WHERE id = $4 RETURNING *",
        [studentId, subjectId, overall_grade, id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Delete an Grade from the database
  delete: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM Grade WHERE id = $1", [
        id,
      ]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  },
};

module.exports = {
  Grade,
};
