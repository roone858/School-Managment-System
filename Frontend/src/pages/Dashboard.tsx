import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../style/dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdminFromCookie } from "../utils/cookies";
import ListGroup from "../Components/ListGroup";
import { addNotification ,  setRedFlag} from "../redux/slice/notifications-slice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: any) => state.students);
  const teachers = useSelector((state: any) => state.teachers);
  const courses = useSelector((state: any) => state.courses);

  return (
    <>
      <div className=" row w-100 gap-3 analyses">
        <div className="col-md-4 col-6 analyst-card">
          <i className="bx bx-user"></i>
          <div className="num">
            <span>Student</span>
            <span> {students.length}</span>
          </div>
        </div>
        <div className="col-md-4 col-6 analyst-card">
          <i className="bx bx-user"></i>
          <div className="num">
            <span>Teachers</span>
            <span>{teachers.length}</span>
          </div>
        </div>
        <div className="col-md-4 col-6 analyst-card">
          <i className="bx bx-user"></i>
          <div className="num">
            <span>Course</span>
            <span> {courses.length}</span>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(
              setRedFlag(true)
            );
          }}
        >
           set Notification Flag
        </button>
      </div>
    </>
  );
};
