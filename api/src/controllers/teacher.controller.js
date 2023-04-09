const { Teacher } = require("../models/teacher.model");

async function createTeacher(req, res) {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllTeachers(req, res) {
  try {
    const teachers = await Teacher.getAll();
    res.status(200).json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getTeacherById(req, res) {
  try {
    const teacher = await Teacher.getById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateTeacher(req, res) {
  try {
    const result = await Teacher.update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteTeacher(req, res) {
  try {
    const result = await Teacher.delete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(204).json({ message: "Student is Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
