const Teaching = require("../models/teaching.model");


async function createTeaching(req, res) {
  try {
    const teaching = await new Teaching().create(req.body);
    res.status(201).json(teaching);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllTeachings(req, res) {
  try {
    const teachings = await Teaching.getAll();
    res.status(200).json(teachings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getTeachingById(req, res) {
  try {
    const teaching = await Teaching.getById(req.params.id);

    if (!teaching) {
      return res.status(404).json({ message: "Teaching not found" });
    }
    res.status(200).json(teaching);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateTeaching(req, res) {
  try {
    const result = await new Teaching().update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Teaching not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteTeaching(req, res) {
  try {
    const result = await Teaching.delete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Teaching not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createTeaching,
  getAllTeachings,
  getTeachingById,
  updateTeaching,
  deleteTeaching,
};
