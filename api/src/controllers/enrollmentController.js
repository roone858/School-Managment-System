const {Enrollment} = require('../models/enrollmentModel');

// Create a new enrollment
const createEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body)
    res.status(201).json(enrollment);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all enrollments
const getAllEnrollments = async (req, res) => {
  try {
    const allEnrollments = await Enrollment.getAll()
    res.json(allEnrollments.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single enrollment by ID
const getEnrollmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const enrollment = await Enrollment.getById(id)
    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }
    res.json(enrollment);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update an existing enrollment
const updateEnrollment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEnrollment = await Enrollment.update(id,req.body)
    if (!updatedEnrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }
    res.json(updatedEnrollment);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete an enrollment
const deleteEnrollment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEnrollment = await Enrollment.delete(id)
    if (!deletedEnrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }
    res.json({ message: 'Enrollment deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
};
