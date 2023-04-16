import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStudent from "./Components/AddForm";
import AddTeacher from "./Components/AddForm";
import Sidebar from "./layouts/Sidebar";
import { Courses } from "./pages/Courses";
import { Dashboard } from "./pages/Dashboard";
import { Setting } from "./pages/Setting";
import { Students } from "./pages/Student";
import { Teachers } from "./pages/Teacher";
import { useDispatch, useSelector } from "react-redux";
import Details from "./Components/Details";
import { useEffect, useState } from "react";
import StudentService from "./services/student.service";
import CourseService from "./services/course.service";
import { addStudent } from "./redux/slice/student-slice";
import TeacherService from "./services/teacher.service";
import NotificationService from "./services/notification.service ";
import { addNotification } from "./redux/slice/notifications-slice";
import { addTeacher } from "./redux/slice/teacher-slice";
import SignInSide from "./pages/SignInSide";
import { getTokenFromCookie } from "./utils/cookies";
import AddFrom from "./Components/AddForm";
import { addCourse } from "./redux/slice/course-slice ";
import NavBar from "./layouts/NavBar";
import AttendanceCm from "./pages/Attendance";
import AttendanceService from "./services/attendance.service";
import { addAttendance } from "./redux/slice/attendance-slice";
import { Attendance, Course, Student, Teacher } from "./types/type";
import UpdateForm from "./Components/UpdateForm";
function App() {
  const token = getTokenFromCookie();
  if (!token) {
    return <SignInSide />;
  }

  const dispatch = useDispatch();
  const studentService = new StudentService();
  const teachersService = new TeacherService();
  const coursesService = new CourseService();
  const attendanceService = new AttendanceService();
  const notificationService = new NotificationService();
  const state = useSelector((state: any) => state);

  useEffect(() => {
    studentService.getStudents().then((result: any) => {
      result.map((student: Student) => dispatch(addStudent(student)));
    });
    teachersService.getTeachers().then((result: any) => {
      result?.map((teacher: Teacher) => dispatch(addTeacher(teacher)));
    });
    coursesService.getCourses().then((result: any) => {
      result?.map((course: Course) => dispatch(addCourse(course)));
    });
    attendanceService.getAttendance().then((result: any) => {
      result?.map((attend: Attendance) => dispatch(addAttendance(attend)));
    });
    notificationService.getNotification().then((result: any) => {
      result?.map((message: any) => dispatch(addNotification(message)));
    });
  }, []);
  if (!state) return <h1>loading</h1>;

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />

        <NavBar />
        <div className="home-section">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="students/update/:id" element={<UpdateForm />} />
            <Route path="/students" element={<Students />}>
              <Route path="add" element={<AddStudent entity="student" />} />

              <Route
                path=":id"
                element={
                  <Details
                    array={useSelector((state: any) => state.students)}
                  />
                }
              />
            </Route>
            <Route path="/teachers" element={<Teachers />}>
              <Route path="add" element={<AddTeacher entity="teacher" />} />
              <Route path="update/:id" element={<UpdateForm />} />
              <Route
                path=":id"
                element={
                  <Details
                    array={useSelector((state: any) => state.teachers)}
                  />
                }
              />
            </Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/attendance" element={<AttendanceCm />}></Route>
            <Route path="/setting//*" element={<Setting />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
