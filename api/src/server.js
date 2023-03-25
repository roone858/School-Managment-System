const express = require("express");

const app = express();
const studentRout = require("./routes/student");
const teacherRout = require("./routes/teacher");
const enrollmentRout = require("./routes/enrollment");
const courseRout = require("./routes/course");
const parentRout = require("./routes/parent");

app.use(express.json());

app.use("/api/student", studentRout);
app.use("/api/teacher", teacherRout);
app.use("/api/enrollment", enrollmentRout);
app.use("/api/course", courseRout);
app.use("/api/parent", parentRout);

app.listen(3000, () => {
  console.log("server listening on port : 3000");
});
