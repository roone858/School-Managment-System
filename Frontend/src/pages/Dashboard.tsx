import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../css/dashboard.css";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const students=useSelector((state:any)=> state.students)
  const teachers=useSelector((state:any)=> state.teachers)
  
  
  return (
    <>
      <div className="dashboard">
        <div className="analyses">
          <div className="analyst-card">
            <i className="bx bx-user"></i>
            <div className="num">
              <span>Student</span>
              <span> {students.length}</span>
            </div>
          </div>
          <div className=" analyst-card">
            <i className="bx bx-user"></i>
            <div className="num">
              <span>Teachers</span>
              <span>{teachers.length}</span>
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
