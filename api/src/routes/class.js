const express = require("express");
const {
  createClassModel,
  getAllClassModels,
  getClassModelById,
  updateClassModel,
  deleteClassModel,
} = require("../controllers/class.controller");
const router = express.Router();


router.get("/", getAllClassModels);
router.post("/", createClassModel);
router.get("/:id",getClassModelById);
router.put("/:id",updateClassModel);
router.delete("/:id",deleteClassModel);


module.exports = router;
