const {Attendance} = require('../models/attendanceModel');

// Create a new Attendance
const createAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body)
    res.status(201).json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all Attendances
const getAllAttendances = async (req, res) => {
  try {
    const allAttendances = await Attendance.getAll()
    res.json(allAttendances);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single Attendance by ID
const getAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const attendance = await Attendance.getById(id)
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }
    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update an existing Attendance
const updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAttendance = await Attendance.update(id,req.body)
    if (!updatedAttendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }
    res.json(updatedAttendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete an Attendance
const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAttendance = await Attendance.delete(id)
    if (!deletedAttendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }
    res.json({ message: 'Attendance deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
};
