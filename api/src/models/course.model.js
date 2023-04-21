const client = require("../db");

class Course {
  static async getAll() {
    const conn = await client.connect();
    try {
      const courseResult = await conn.query("SELECT * FROM course");
      const courses = courseResult.rows;

      return courses;
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
    const courseQuery =
      "INSERT INTO course (title, description, department) VALUES ($1, $2, $3) RETURNING *";

    const conn = await client.connect();
    try {
      const { title, description, department } = data;
      const courseResult = await conn.query(courseQuery, [
        title,
        description,
        department,
      ]);
      const course = courseResult.rows[0];

      return course;
    } finally {
      conn.release();
    }
  }
  async update(id, data) {
    const query =
      "UPDATE course SET title = $1, description = $2, department = $3 WHERE id = $4 RETURNING *";
    const conn = await client.connect();
    try {
      const { title, description, department } = data;
      const result = await conn.query(query, [
        title,
        description,
        department,
        id,
      ]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  static async delete(id) {
    const conn = await client.connect();
    try {
      const teachResult = await conn.query(
        "DELETE FROM Teaching WHERE course_id = $1",
        [id]
      );
      const result = await conn.query("DELETE FROM course WHERE id = $1", [id]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = Course;
