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
      "INSERT INTO teaching (semester , section , start_date , end_date , teacher_id , course_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const conn = await client.connect();
    try {
      const { semester, section, start_date, end_date, teacher_id, course_id } =
        data;

      const teachResult = await conn.query(teachQuery, [
        semester,
        section,
        start_date,
        end_date,
        teacher_id,
        course_id,
      ]);
      const teachRow = teachResult.rows[0];
      return teachRow;
    } finally {
      conn.release();
    }
  }
  async update(id, data) {
    const query =
      "UPDATE teaching SET semester = $1, section = $2, start_date = $3, end_date = $4, teacher_id=$5, course_id=$6 WHERE id=$7  RETURNING *";
    const conn = await client.connect();
    try {
      const { semester, section, start_date, end_date, teacher_id } = data;
      const result = await conn.query(query, [
        semester,
        section,
        start_date,
        end_date,
        teacher_id,
        course.id,
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
        "DELETE FROM teaching WHERE id = $1",
        [id]
      );
      return teachResult.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = Teaching;
