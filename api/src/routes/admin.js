const express = require("express");

const router = express.Router();
const {
  getAllAdmins,
  getAdminById,
  getAdminByUsername,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin.controller");

router.get("/", getAllAdmins);
router.get("/:id", getAdminById);
router.get("/username/:username", getAdminByUsername);
router.post("/", createAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
