const express = require("express");
const {
  createTeaching,
  getAllTeachings,
  getTeachingById,
  updateTeaching,
  deleteTeaching,
  deleteTeachingByTeacherID
  
} = require("../controllers/teaching.controller");
const router = express.Router();


router.get("/", getAllTeachings);
router.post("/", createTeaching);
router.get("/:id",getTeachingById);
router.put("/:id",updateTeaching);
router.delete("/:id",deleteTeaching);
router.delete("/teacher/:id",deleteTeachingByTeacherID);


module.exports = router;
