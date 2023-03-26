const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const studentRout = require("./routes/student");
const teacherRout = require("./routes/teacher");
const enrollmentRout = require("./routes/enrollment");
const courseRout = require("./routes/course");
const parentRout = require("./routes/parent");
const attendanceRout = require("./routes/attendance");
const gradeRout = require("./routes/grade");

app.use(express.json());
// Use middleware to handle HTTP request bodies
app.use(bodyParser.json());

// Use middleware to enable CORS
app.use(cors());

app.use("/api/student", studentRout);
app.use("/api/teacher", teacherRout);
app.use("/api/enrollment", enrollmentRout);
app.use("/api/course", courseRout);
app.use("/api/parent", parentRout);
app.use("/api/attendance", attendanceRout);
app.use("/api/grade", gradeRout);

app.listen(3000, () => {
  console.log("server listening on port : 3000");
});
