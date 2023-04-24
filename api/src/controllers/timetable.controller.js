const TimeTable = require("../models/timetable.model");


async function createTimeTable(req, res) {
  try {
    const result = await new TimeTable().create(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllTimeTables(req, res) {
  try {
    const results = await TimeTable.getAll();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getTimeTableById(req, res) {
  try {
    const result = await TimeTable.getById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "TimeTable not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateTimeTable(req, res) {
  try {
    const result = await new TimeTable().update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "TimeTable not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteTimeTable(req, res) {
  try {
    const result = await TimeTable.delete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createTimeTable,
  getAllTimeTables,
  getTimeTableById,
  updateTimeTable,
  deleteTimeTable,
};
