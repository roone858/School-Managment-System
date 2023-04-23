const express = require("express");
const router = express.Router();
const studentRout = require("./student");
const teacherRout = require("./teacher");
const enrollmentRout = require("./enrollment");
const subjectRout = require("./subject");
const classRout = require("./class");
const teachingRout = require("./teaching");
const parentRout = require("./parent");
const attendanceRout = require("./attendance");
const gradeRout = require("./grade");
const notificationRout = require("./notification");
const adminRout = require("./admin");

router.use("/student", studentRout);
router.use("/teacher", teacherRout);
router.use("/enrollment", enrollmentRout);
router.use("/subject", subjectRout);
router.use("/class", classRout);
router.use("/teaching", teachingRout);
router.use("/parent", parentRout);
router.use("/attendance", attendanceRout);
router.use("/grade", gradeRout);
router.use("/notification", notificationRout);
router.use("/admin", adminRout);

module.exports = router;
