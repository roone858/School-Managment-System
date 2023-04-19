const { AdminMethods } = require("../models/admin.model");

const db = new AdminMethods();

async function getAllAdmins(req, res) {
  try {
    const admins = await db.getAll();
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAdminById(req, res) {
  try {
    const admin = await db.getById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
async function getAdminByUsername(req, res) {
  try {
    const admin = await db.getByUsername(req.params.username);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
async function createAdmin(req, res) {
  try {
    const admin = await db.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
async function updateAdmin(req, res) {
  try {
    const result = await db.update(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
async function updateAdminPassword(req, res) {
  try {
    const result = await db.updatePassword(req.body.username, req.body);
    if (!result) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteAdmin(req, res) {
  try {
    const result = await db.delete(req.params.id);
    if (!result) return res.status(404).json({ message: "Admin not found" });
    if (result == true) res.status(204).json({ message: "Admin is Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllAdmins,
  getAdminById,
  getAdminByUsername,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  updateAdminPassword,
};
