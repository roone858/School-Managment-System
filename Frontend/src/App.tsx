import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Button from "./Components/Button";
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
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/students" element={<Student />}></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
