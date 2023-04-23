const client = require("../db");

class Subject {
  static async getAll() {
    const conn = await client.connect();
    try {
      const subjectResult = await conn.query("SELECT * FROM subject");
      const subjects = subjectResult.rows;

      return subjects;
    } finally {
      conn.release();
    }
  }

  static async getById(id) {
    const query = "SELECT * FROM subject WHERE id = $1";
    const conn = await client.connect();
    try {
      const result = await conn.query(query, [id]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  async create(data) {
    const subjectQuery =
      "INSERT INTO subject (title, description) VALUES ($1, $2) RETURNING *";

    const conn = await client.connect();
    try {
      const { title, description } = data;
      const subjectResult = await conn.query(subjectQuery, [
        title,
        description
      ]);
      const subject = subjectResult.rows[0];

      return subject;
    } finally {
      conn.release();
    }
  }
  async update(id, data) {
    const query =
      "UPDATE subject SET title = $1, description = $2 WHERE id = $3 RETURNING *";
    const conn = await client.connect();
    try {
      const { title, description } = data;
      const result = await conn.query(query, [
        title,
        description,

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
        "DELETE FROM Teaching WHERE subject_id = $1",
        [id]
      );
      const result = await conn.query("DELETE FROM subject WHERE id = $1", [id]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = Subject;
