const express = require("express");
const {
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
} = require("../controllers/subject.controller");
const router = express.Router();


router.get("/", getAllSubjects);
router.post("/", createSubject);
router.get("/:id",getSubjectById);
router.put("/:id",updateSubject);
router.delete("/:id",deleteSubject);


module.exports = router;
