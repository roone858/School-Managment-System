import React, { useEffect, useState } from "react";
import "../style/Timetable.css";
import { currentDay, days, getDayFromDate } from "../utils/time";
import ClassService from "../services/class.service";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types/type";
import SessionService from "../services/session.service";
import { fetchSubjects } from "../redux/slice/subject-slice ";
import { Link, Outlet } from "react-router-dom";

const Timetable = () => {
  const [classId, setClassID] = useState(1);
  const subjects = useSelector((state: any) => state.subjects);
  const classes = useSelector((state: State) => state.classes);
  const sessions = useSelector((state: State) => state.sessions);
  const teachings = useSelector((state: any) => state.teaching);
  const teachers = useSelector((state: any) => state.teachers);

  const sessionsRow = sessions.map((session: any) => {
    
    const subject = subjects.find((sub: any) => sub.id == session.subject_id);
    const teaching = teachings.find(
      (teach: any) => teach.subject_id == session.subject_id
    );
    const teacher = teachers.find((t: any) => t.id == teaching?.teacher_id);
 
    return {
      ...session,
      id: session.id,
      title: subject?.title,
      day:session.day,
      startTime: session.start_time.slice(0, -3),
      endTime: session.end_time.slice(0, -3),
      teacher_name: teacher ? teacher?.first_name +" "+teacher?.last_name :"",
    };
  });
  currentDay();

  const timeSlots = [
    { startDate: "08:00", endDate: "09:00" },
    { startDate: "09:00", endDate: "10:00" },
    { startDate: "10:00", endDate: "11:00" },
    { startDate: "11:00", endDate: "12:00" },
    { startDate: "12:00", endDate: "13:00" },
    { startDate: "13:00", endDate: "14:00" },
    { startDate: "14:00", endDate: "15:00" },
    { startDate: "15:00", endDate: "16:00" },
    { startDate: "16:00", endDate: "17:00" },
  ];

 
  return (
    <>
     <Link className="btn btn-primary mb-4" to={"add"}>
        Add New Session
      </Link>
      <Outlet/>
      <div>
        <form >
          <div className="form-row  col-4 gap-2">
            <label htmlFor="class-selector">CLASS NAME :</label>
            <select
              className="form-control"
              name="class_id"
              id="class-selector"
              onChange={(e: any) => {
                setClassID(e.target.value);
              }}
            >
              <option>Select Class</option>
              {classes.map((c: any) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        
        </form>

      </div>
      <div className="timetable">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Time</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((timeSlot) => (
              <tr key={timeSlot.startDate}>
                <td>{timeSlot.startDate + "-" + timeSlot.endDate}</td>
                {days.map((day) => {
                  const filterSessions = sessionsRow?.find(
                    (session: any) =>
                      session.day === day &&
                      session.startTime == timeSlot.startDate &&
                      session.class_id == classId
                  );
                  return (
                    <td className={filterSessions?.title} key={day}>
                      {filterSessions ? filterSessions.title : null}
                      <p>{filterSessions?.teacher_name}</p>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </>
  );
};

export default Timetable;
