const {Grade} = require('../models/grade.model');

// Create a new Grade
const createGrade = async (req, res) => {
  try {
    const grade = await Grade.create(req.body)
    res.status(201).json(grade);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all Grades
const getAllGrades = async (req, res) => {
  try {
    const allGrades = await Grade.getAll()
    res.json(allGrades);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single Grade by ID
const getGradeById = async (req, res) => {
  try {
    const { id } = req.params;
    const grade = await Grade.getById(id)
    if (!grade) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.json(grade);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update an existing Grade
const updateGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGrade = await Grade.update(id,req.body)
    if (!updatedGrade) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.json(updatedGrade);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete an Grade
const deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGrade = await Grade.delete(id)
    if (!deletedGrade) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.json({ message: 'Grade deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createGrade,
  getAllGrades,
  getGradeById,
  updateGrade,
  deleteGrade,
};
