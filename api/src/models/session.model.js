const client = require("../db");

class Session {
  static async getAll() {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM class_session");
      return result.rows;
    } finally {
      conn.release();
    }
  }

  static async getById(id) {
    const query = "SELECT * FROM class_session WHERE id = $1";
    const conn = await client.connect();
    try {
      const result = await conn.query(query, [id]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  async create(data) {
    const query = `INSERT INTO class_session (  start_time, end_time, class_id, subject_id, timetable_id, day) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *`;

    const conn = await client.connect();
    try {
      const {start_time, end_time, class_id, subject_id, timetable_id ,day} = data;
      const result = await conn.query(query, [start_time, end_time, class_id, subject_id, timetable_id,day]);

      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async update(id, data) {
    const query =
      "UPDATE class_session SET start_time =$1, end_time=$2, class_id=$3, subject_id=$4, timetable_id=$5, day=$6 WHERE id = $7 RETURNING *";
    const conn = await client.connect();
    try {
      const {start_time, end_time, class_id, subject_id, timetable_id } = data;
      const result = await conn.query(query, [start_time, end_time, class_id, subject_id, timetable_id]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  static async deleteByClass(id) {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "DELETE FROM class_session WHERE class_id = $1",
        [id]
      );
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
  static async delete(id) {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "DELETE FROM class_session WHERE id = $1",
        [id]
      );
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = Session;
