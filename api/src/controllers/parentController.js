const { Parent } = require("../models/parentModel");

async function createParent(req, res) {
  try {
    const parent = await Parent.create(req.body);
    res.status(201).json(parent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllParents(req, res) {
  try {
    const parents = await Parent.getAll();
    res.status(200).json(parents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getParentById(req, res) {
  try {
    const parent = await Parent.getById(req.params.id);
    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json(parent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateParent(req, res) {
  try {
    const result = await Parent.update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteParent(req, res) {
  try {
    const result = await Parent.delete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createParent,
  getAllParents,
  getParentById,
  updateParent,
  deleteParent,
};
