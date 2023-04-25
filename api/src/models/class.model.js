const client = require("../db");

class ClassModel {
  static async getAll() {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM class");
      return result.rows;
    } finally {
      conn.release();
    }
  }

  static async getById(id) {
    const query = "SELECT * FROM class WHERE id = $1";
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
      "INSERT INTO class (name, grade_level) VALUES ($1, $2) RETURNING *";

    const conn = await client.connect();
    try {
      const { name, grade_level } = data;
      const result = await conn.query(query, [name, grade_level]);

      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async update(id, data) {
    const query =
      "UPDATE class SET name = $1, grade_level = $2 WHERE id = $3 RETURNING *";
    const conn = await client.connect();
    try {
      const { name, grade_level } = data;
      const result = await conn.query(query, [ name, grade_level , id]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  static async delete(id) {
    const conn = await client.connect();
    try {
    
      const result = await conn.query("DELETE FROM class WHERE id = $1", [id]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = ClassModel;
