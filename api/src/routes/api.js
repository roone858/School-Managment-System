
const express = require("express");
const router = express.Router();
const studentRout = require("./student");
const teacherRout = require("./teacher");
const enrollmentRout = require("./enrollment");
const courseRout = require("./course");
const parentRout = require("./parent");
const attendanceRout = require("./attendance");
const gradeRout = require("./grade");
const notificationRout = require("./notification");

router.use("/student", studentRout);
router.use("/teacher", teacherRout);
router.use("/enrollment", enrollmentRout);
router.use("/course", courseRout);
router.use("/parent", parentRout);
router.use("/attendance", attendanceRout);
router.use("/grade", gradeRout);
router.use("/notification", notificationRout);

module.exports =router