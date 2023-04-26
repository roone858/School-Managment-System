const ClassModel = require("../models/class.model");


async function createClassModel(req, res) {
  try {
    const result = await new ClassModel().create(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllClassModels(req, res) {
  try {
    const results = await ClassModel.getAll();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getClassModelById(req, res) {
  try {
    const result = await ClassModel.getById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "ClassModel not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateClassModel(req, res) {
  try {
    const result = await new ClassModel().update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "ClassModel not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteClassModel(req, res) {
  try {
    const result = await ClassModel.delete(req.params.id);
    console.log(result)
    if (!result) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createClassModel,
  getAllClassModels,
  getClassModelById,
  updateClassModel,
  deleteClassModel,
};
