import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import AddStudent from "./Components/AddForm";
import AddTeacher from "./Components/AddForm";
import Sidebar from "./Components/Sidebar";
import { Courses } from "./pages/Courses";
import { Dashboard } from "./pages/Dashboard";
import { Setting } from "./pages/Setting";
import { Students } from "./pages/Student";
import { Teachers } from "./pages/Teacher";
import { useDispatch, useSelector } from "react-redux";
import Details from "./Components/Details";
import { useEffect, useState } from "react";
import StudentService from "./services/student.service";
import { addStudent } from "./features/slice/student-slice";
import TeacherService from "./services/teacher.service";
import { addTeacher } from "./features/slice/teacher-slice";
import SignInSide from "./pages/SignInSide";
function App() {
  
  if (!localStorage.getItem("token")) {
    return <SignInSide />;
  }
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const dispatch = useDispatch();
  const studentService = new StudentService();
  const teachersService = new TeacherService();
  useEffect(() => {
    
  
 
    studentService.getStudents().then((result: any) => {
      result.map((student: any) => dispatch(addStudent(student)));
      setStudents(result);
    });
    teachersService.getTeachers().then((result: any) => {
      result.map((student: any) => dispatch(addTeacher(student)));
      setTeachers(result);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="home-section">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />}>
              <Route path="add" element={<AddStudent entity="student" />} />
              <Route path=":id" element={<Details array={students} />} />
            </Route>
            <Route path="/teachers" element={<Teachers />}>
              <Route path="add" element={<AddTeacher entity="teacher" />} />
              <Route path=":id" element={<Details array={teachers} />} />
            </Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
