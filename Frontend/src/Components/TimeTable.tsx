import React, { useEffect, useState } from "react";
import "../style/Timetable.css";
import { currentDay, getDayFromDate } from "../utils/time";
import ClassService from "../services/class.service";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types/type";
import SessionService from "../services/session.service";
import { fetchSubjects } from "../redux/slice/subject-slice ";

const Timetable = () => {
  const [classId, setClassID] = useState(1);
  const [className, setClassName] = useState();
  const dispatch = useDispatch();
  const subjects = useSelector((state: any) => state.subjects);
  const classes = useSelector((state: State) => state.classes);
  const sessions = useSelector((state: State) => state.sessions);
  const timetables = useSelector((state: any) => state.timetables);
  const teachings = useSelector((state: any) => state.teaching);
  const teachers = useSelector((state: any) => state.teachers);
  const timetable = timetables.find((table: any) => table.class_id == classId);

  const sessionsRow = sessions.map((session: any) => {
    const date = session.start_time.slice(0, session.start_time.indexOf("T"));
    const startTime = session.start_time.slice(
      session.start_time.indexOf("T"),
      session.start_time.indexOf(".")
    );
    const endTime = session.end_time.slice(
      session.end_time.indexOf("T"),
      session.end_time.indexOf(".")
    );
    const subject = subjects.find((sub: any) => sub.id == session.subject_id);
    const teaching = teachings.find(
      (teach: any) => teach.subject_id == session.subject_id
    );
    const teacher = teachers.find((t: any) => t.id == teaching?.teacher_id);
    return {
      ...session,
      id: session.id,
      title: subject.title,
      day: getDayFromDate(date),
      startTime: startTime.slice(1, -3),
      endTime: endTime.slice(1, -3),
      teacher_name: teacher ? teacher.name :null,
    };
  });

  currentDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
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
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const c = classes.find((c: any) => c.id == classId);
    setClassName(c.name);
  };
  useEffect(() => {
  }, []);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
          <div className="form-row ">
            <button className="btn btn-primary mt-2" type="submit">
              {" "}
              OK
            </button>
          </div>
        </form>
        <h1>{className}</h1>
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
                      session.timetable_id == timetable?.id
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
