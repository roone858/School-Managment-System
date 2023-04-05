const client = require("../db");

// Define the model for the "students" table
class AdminMethods  {
  // Fetch all students from the database
  async getAll  () {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM student");
      return result.rows;
    } finally {
      conn.release();
    }
  }

  // Fetch a specific student by ID from the database
  async  getById  (id)  {
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

  // Create a new student in the database
  async create (data)  {
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
        parentId
      } = data;
      const result = await conn.query(
        "INSERT INTO admin (firstName, lastName, email, gender, phone, dateOfBirth, address, parentId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [firstName, lastName, email, gender, phone, dateOfBirth, address, parentId]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  // Update an existing student in the database
  async update (id, data)  {
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
        parentId,
      } = data;
      const result = await conn.query(
        "UPDATE student SET firstName = $1, lastName = $2, email = $3, gender = $4, phone = $5, dateOfBirth = $6, address = $7, parentId = $8 WHERE id = $9 RETURNING *",
        [
          firstName,
          lastName,
          email,
          gender,
          phone,
          dateOfBirth,
          address,
          parentId,
          id,
        ]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  // Delete a student from the database
  async  delete (id)  {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM student WHERE id = $1", [
        id,
      ]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
};

module.exports = {
  AdminMethods,
};
