const express = require("express");
const router = express.Router();
const {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/attendance.controller");


router.get("/", getAllAttendances);
router.post("/", createAttendance);
router.get("/:id",getAttendanceById);
router.put("/:id",updateAttendance);
router.delete("/:id",deleteAttendance);


module.exports = router;
