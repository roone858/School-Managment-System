import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import  AddStudent  from "./Components/student/Add";
import Navbar from "./Components/Navbar";

import Sidebar from "./Components/Sidebar";
import { Courses } from "./pages/Courses";
import { Dashboard } from "./pages/Dashboard";
import { Setting } from "./pages/Setting";
import { Student } from "./pages/Student";
import { Teachers } from "./pages/Teacher";

function App() {
  const myName = "mahmoud";
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="home-section">
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/students" element={<Student />}>
            <Route path="add" element={<AddStudent />}/>
            </Route>
            <Route path="/teachers" element={<Teachers />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
