const express = require("express");
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");
const router = express.Router();


router.get("/", getAllTeachers);
router.post("/", createTeacher);
router.get("/:id",getTeacherById);
router.put("/:id",updateTeacher);
router.delete("/:id",deleteTeacher);


module.exports = router;
