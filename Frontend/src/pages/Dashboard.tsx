import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../css/dashboard.css";

export const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/api/student")
  //     .then((res) => res.json())
  //     .then((data) => setStudents(data));
  //   fetch("http://localhost:4000/api/teacher")
  //     .then((res) => res.json())
  //     .then((data) => setTeachers(data));
  //   fetch("http://localhost:4000/api/student")
  //     .then((res) => res.json())
  //     .then((data) => setStudents(data));
  // }, []);
  return (
    <>
      <div className="dashboard">
        <div className="analyses">
          <div className="analyst-card">
            <i className="bx bx-user"></i>
            <div className="num">
              <span>Student</span>
              <span> 5000</span>
            </div>
          </div>
          <div className=" analyst-card">
            <i className="bx bx-user"></i>
            <div className="num">
              <span>Teachers</span>
              <span>400</span>
            </div>
          </div>
          <div className="analyst-card">
            <i className="bx bx-user"></i>
            <div className="num">
              <span>Course</span>
              <span> 50</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
