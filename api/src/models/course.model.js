const client = require("../db");

class Course {
  static async getAll() {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM course");
      return result.rows;
    } finally {
      conn.release();
    }
  }

  static async getById(id) {
    const query = "SELECT * FROM course WHERE id = $1";
    const conn = await client.connect();
    try {
      const result = await conn.query(query, [id]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  async create(data) {
    const query =
      "INSERT INTO course (title, description, teacherId) VALUES ($1, $2, $3) RETURNING *";
    const conn = await client.connect();
    try {
      const { title, description, teacherId } = data;
      const result = await conn.query(query, [title, description, teacherId]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async update(id,data) {
    const query =
      "UPDATE course SET title = $1, description = $2, teacherId = $3 WHERE id = $4 RETURNING *";
    const conn = await client.connect();
    try {
      const { title, description, teacherId } = data;
      const result = await conn.query(query, [title, description, teacherId, id]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

   static async delete(id) {
    const conn = await client.connect();
    try {
      const result = await conn.query("DELETE FROM course WHERE id = $1", [id]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = Course;
