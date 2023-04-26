const client = require("../db");

// Define the model for the "Attendances" table
const Attendance = {
  // Fetch all Attendances from the database
  getAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM attendance");
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
        "SELECT * FROM attendance WHERE id = $1",
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
      const { student_id, subject_id, class_session_id, date, status } = data;
      const result = await conn.query(
        "INSERT INTO Attendance ( student_id, subject_id,class_session_id,date ,status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [student_id, subject_id, class_session_id, date, status]
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
      const { student_id, subject_id, class_session_id, date, status } = data;
      const result = await conn.query(
        "UPDATE Attendance SET student_id = $1, subject_id = $2, class_session_id=$3, date=$4, status=$5 WHERE id = $6 RETURNING *",
        [student_id, subject_id, class_session_id, date, status, id]
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
