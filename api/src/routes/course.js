const express = require("express");
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.controller");
const router = express.Router();


router.get("/", getAllCourses);
router.post("/", createCourse);
router.get("/:id",getCourseById);
router.put("/:id",updateCourse);
router.delete("/:id",deleteCourse);


module.exports = router;
