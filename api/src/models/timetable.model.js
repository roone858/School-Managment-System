const client = require("../db");

class TimeTable {
  static async getAll() {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM timeTable");
      return result.rows;
    } finally {
      conn.release();
    }
  }

  static async getById(id) {
    const query = "SELECT * FROM timeTable WHERE id = $1";
    const conn = await client.connect();
    try {
      const result = await conn.query(query, [id]);
      return result.rows[0];
    } finally {
      conn.release();
    }
  }

  async create(data) {
    const query = `INSERT INTO timeTable (start_time, end_time, period, class_id) VALUES ($1, $2,$3,$4) RETURNING *`;

    const conn = await client.connect();
    try {
      const { start_time, end_time, period, class_id } = data;
      const result = await conn.query(query, [
        start_time,
        end_time,
        period,
        class_id,
      ]);

      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async update(id, data) {
    const query =
      "UPDATE timeTable SET start_time =$1, end_time=$2, period=$3, class_id=$4 WHERE id = $5 RETURNING *";
    const conn = await client.connect();
    try {
      const { start_time, end_time, period, class_id } = data;
      const result = await conn.query(query, [
        start_time,
        end_time,
        period,
        class_id,
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
      const result = await conn.query("DELETE FROM timeTable WHERE id = $1", [
        id,
      ]);
      return result.rowCount > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = TimeTable;
