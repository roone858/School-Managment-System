const client = require("../db");

// Define the model for the "Attendances" table
const Attendance = {
  // Fetch all Attendances from the database
  getAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM Attendance");
      return result.rows;
    } finally {
      conn.release();
    }
  },

  // Fetch a specific Attendance by ID from the database
  getById: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "SELECT * FROM Attendance WHERE id = $1",
        [id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Create a new Attendance in the database
  create: async (data) => {
    const conn = await client.connect();
    try {
      const { studentId, courseId } = data;
      const result = await conn.query(
        "INSERT INTO Attendance (studentId, courseId) VALUES ($1, $2) RETURNING *",
        [studentId, courseId]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Update an existing attendance in the database
  update: async (id, data) => {
    const conn = await client.connect();
    try {
      const { studentId, courseId } = data;
      const result = await conn.query(
        "UPDATE Attendance SET studentId = $1, courseId = $2 WHERE id = $3 RETURNING *",
        [studentId, courseId, id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Delete an Attendance from the database
  delete: async (id) => {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM Attendance WHERE id = $1", [
        id,
      ]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  },
};

module.exports = {
  Attendance,
};
