const express = require("express");
const {
  createGrade,
  getAllGrades,
  getGradeById,
  updateGrade,
  deleteGrade,
} = require("../controllers/gradeController");
const router = express.Router();


router.get("/", getAllGrades);
router.post("/", createGrade);
router.get("/:id",getGradeById);
router.put("/:id",updateGrade);
router.delete("/:id",deleteGrade);


module.exports = router;
