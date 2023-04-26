const client = require("../db");

class Teaching {
  static async getAll() {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM teaching");
      const teachingRows = result.rows;

      return teachingRows;
    } finally {
      conn.release();
    }
  }

  static async getById(id) {
    const query = "SELECT * FROM teaching WHERE id = $1";
    const conn = await client.connect();
    try {
      const result = await conn.query(query, [id]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  async create(data) {
    const teachQuery =
      "INSERT INTO teaching (semester  , start_date , end_date , teacher_id , subject_id,grade_level) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *";
    const conn = await client.connect();
    try {
      const {
        semester,
        start_date,
        end_date,
        teacher_id,
        subject_id,
        grade_level,
      } = data;

      const teachResult = await conn.query(teachQuery, [
        semester,
        start_date,
        end_date,
        teacher_id,
        subject_id,
        grade_level,
      ]);
      const teachRow = teachResult.rows[0];
      return teachRow;
    } finally {
      conn.release();
    }
  }
  async update(id, data) {
    const query =
      "UPDATE teaching SET semester = $1, start_date = $2, end_date = $3, teacher_id=$4, subject_id=$5 , grade_level=$6 WHERE subject_id=$7  RETURNING *";
    const conn = await client.connect();
    try {
      const {
        semester,
        start_date,
        end_date,
        teacher_id,
        subject_id,
        grade_level,
      } = data;
      const result = await conn.query(query, [
        semester,
        start_date,
        end_date,
        teacher_id,
        subject_id,
        grade_level,
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
        "DELETE FROM teaching WHERE teacher_id = $1",
        [id]
      );
      return teachResult.rowCount > 0;
    } finally {
      conn.release();
    }
  }
  static async deleteByTeacherId(id) {
    const conn = await client.connect();
    try {
      const teachResult = await conn.query(
        "DELETE FROM teaching WHERE teacher_id = $1",
        [id]
      );
      return teachResult.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = Teaching;
