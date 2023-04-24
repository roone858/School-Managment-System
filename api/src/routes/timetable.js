const express = require("express");
const {
  getAllTimeTables,
  getTimeTableById,
  createTimeTable,
  updateTimeTable,
  deleteTimeTable,
} = require("../controllers/timetable.controller");
const router = express.Router();


router.get("/", getAllTimeTables);
router.post("/", getTimeTableById);
router.get("/:id",createTimeTable);
router.put("/:id",updateTimeTable);
router.delete("/:id",deleteTimeTable);


module.exports = router;
