const Subject = require("../models/subject.model");


async function createSubject(req, res) {
  try {
    const subject = await new Subject().create(req.body);
    res.status(201).json(subject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllSubjects(req, res) {
  try {
    const subjects = await Subject.getAll();
    res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getSubjectById(req, res) {
  try {
    const subject = await Subject.getById(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.status(200).json(subject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateSubject(req, res) {
  try {
    const result = await new Subject().update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteSubject(req, res) {
  try {
    const result = await Subject.delete(req.params.id);
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
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
};
