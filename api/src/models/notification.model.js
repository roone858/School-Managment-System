const client = require("../db");

// Define the model for the "Attendances" table
const Notification = {
  // Fetch all Attendances from the database
  getAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM notifications ; "); //ORDER BY id DESC
      return result.rows;
    } finally {
      conn.release();
    }
  },



  // Create a new notification  in the database
  create: async (data) => {
    const conn = await client.connect();
    try {
      const { message } = data;
      const result = await conn.query(
        "INSERT INTO notifications ( message ) VALUES ($1) RETURNING *",
        [message]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  },

  // Update an existing attendance in the database
  

  // Delete an Attendance from the database
  deleteAll: async () => {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM notifications ");
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  },
};

module.exports = {
  Notification,
};
