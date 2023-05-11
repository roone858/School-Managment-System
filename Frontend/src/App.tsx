import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./layouts/Sidebar";
import { Subjects } from "./pages/Subjects";
import { Dashboard } from "./pages/Dashboard";
import { Setting } from "./pages/Setting";
import { Students } from "./pages/Student";
import { Teachers } from "./pages/Teacher";
import { useDispatch, useSelector } from "react-redux";
import Details from "./Components/Details";
import { useEffect, useState } from "react";
import { addStudent, fetchStudents } from "./redux/slice/student-slice";
import StudentService from "./services/student.service";
import SubjectService from "./services/subject.service";
import TeachingService from "./services/teaching.service";
import TeacherService from "./services/teacher.service";
import AttendanceService from "./services/attendance.service";
import NotificationService from "./services/notification.service";
import { addNotification } from "./redux/slice/notifications-slice";
import { addTeacher, fetchTeachers } from "./redux/slice/teacher-slice";
import SignInSide from "./pages/SignInSide";
import { getTokenFromCookie } from "./utils/cookies";
import { addSubject, fetchSubjects } from "./redux/slice/subject-slice ";
import NavBar from "./layouts/NavBar";
import AttendanceCm from "./pages/Attendance";
import { addAttendance, fetchAttendance } from "./redux/slice/attendance-slice";
import {
  Notification,
  Attendance,
  Subject,
  State,
  Student,
  Teacher,
  Message,
} from "./types/type";
import UpdateForm from "./Components/UpdateForm";
import Table from "./Components/bootstrap/Table";
import "./App.css";
import { AddSubject } from "./Components/AddComponents/AddSubject";
import { addTeaching, fetchTeaching } from "./redux/slice/teaching-slice";
import Timetable from "./pages/TimeTable";
import { addClass, fetchClasses } from "./redux/slice/class-slice ";
import { addSession, fetchSessions } from "./redux/slice/session-slice ";
import { ClassPage } from "./pages/ClassPage";
import AddClass from "./Components/AddComponents/AddClass";
import UpdateStudent from "./Components/UpdateComponents/UpdateStudent";
import UpdateClass from "./Components/UpdateComponents/UpdateClass";
import UpdateTeacher from "./Components/UpdateComponents/UpdateTeacher";
import UpdateSubject from "./Components/UpdateComponents/UpdateSubject";
import AddSession from "./Components/AddComponents/AddSession";
import SignIn from "./pages/SignIn";
import StudentDetails from "./Components/DetailsComponents/StudentDetails";
import TeacherDetails from "./Components/DetailsComponents/TeacherDetails";
function App() {
  const dispatch = useDispatch();

  const token = getTokenFromCookie();
  if (!token) {
    return <SignIn />;
  }

  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e: any) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    let isDone = false;

    dispatch(fetchStudents());
    dispatch(fetchTeachers());
    dispatch(fetchSubjects());
    dispatch(fetchTeaching());
    dispatch(fetchClasses());
    dispatch(fetchAttendance());
    dispatch(fetchSessions());
    // dispatch(fetchTimetables())
    // StudentService.getStudents().then((result: Student[]) => {
    //   if (!isDone)
    //     result.map((student: Student) => dispatch(addStudent(student)));
    // });
    // TeacherService.getTeachers().then((result: Teacher[]) => {
    //   if (!isDone)
    //     result?.map((teacher: Teacher) => dispatch(addTeacher(teacher)));
    // });
    // SubjectService.getAllSubjects().then((result: Subject[]) => {
    //   if (!isDone)
    //     result?.map((subject: Subject) => dispatch(addSubject(subject)));
    // });
    // TeachingService.getAllTeachings().then((result: any) => {
    //   if (!isDone) result?.map((row: any) => dispatch(addTeaching(row)));
    // });
    // AttendanceService.getAttendance().then((result: Attendance[]) => {
    //   if (!isDone)
    //     result?.map((attend: Attendance) => dispatch(addAttendance(attend)));
    // });
    NotificationService.getNotification().then((result: Message[]) => {
      if (!isDone)
        result?.map((message: Message) => dispatch(addNotification(message)));
    });
    // ClassService.getAllClass().then((result) => {
    //   if (!isDone) result?.map((c: any) => dispatch(addClass(c)));
    // });
    // SessionService.getAllSession().then((result) => {
    //   if (!isDone) result?.map((s: any) => dispatch(addSession(s)));
    // });

    return () => {
      isDone = true;
    };
  }, []);

  return (
    <div className="App ">
      <BrowserRouter>
        <Sidebar onChange={changeHandler} />

        <NavBar />
        <div className="home-section  bg-eee">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/test" element={<Table />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="students/update/:id" element={<UpdateStudent />} />
            <Route path="/students" element={<Students />}></Route>
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="/teachers" element={<Teachers />}>
              <Route path="update/:id" element={<UpdateTeacher />} />
            </Route>
            <Route path="/teachers/:id" element={<TeacherDetails />} />
            <Route path="/subjects" element={<Subjects />}></Route>
            <Route path="subjects/update/:id" element={<UpdateSubject />} />
            <Route path="/timetable" element={<Timetable />}></Route>
            <Route path="/classes" element={<ClassPage />}></Route>
            <Route path="/classes/add" element={<AddClass />}></Route>
            <Route path="/classes/update/:id" element={<UpdateClass />} />
            <Route path="/attendance" element={<AttendanceCm />}></Route>
            <Route path="/setting//*" element={<Setting />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
