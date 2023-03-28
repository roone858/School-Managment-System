const express = require("express");

const router = express.Router();
const {
  createParent,
  getAllParents,
  getParentById,
  updateParent,
  deleteParent,
} = require("../controllers/parent.controller");

router.get("/", getAllParents);
router.post("/", createParent);
router.get("/:id",getParentById);
router.put("/:id",updateParent);
router.delete("/:id",deleteParent);

module.exports = router;
