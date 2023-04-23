import React, { useEffect, useState } from "react";
import "../style/Timetable.css";
import { currentDay } from "../utils/time";
import ClassService from "../services/class.service";
import { useSelector } from "react-redux";
import { State } from "../types/type";

const Timetable = () => {
  const classes= useSelector((state:State)=> state.classes)
  const [classId, setClassID] = useState();
  const [className, setClassName] = useState();
  currentDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const timeSlots = [
    { startDate: "9:00", endDate: "10:00" },
    { startDate: "10:00", endDate: "11:00" },
    { startDate: "11:00", endDate: "12:00" },
    { startDate: "12:00", endDate: "1:00" },
    { startDate: "1:00", endDate: "2:00" },
    { startDate: "2:00", endDate: "3:00" },
    { startDate: "3:00", endDate: "4:00" },
    { startDate: "4:00", endDate: "5:00" },
  ];
  const events = [
    {
      id: 1,
      title: "Maths",
      day: "Monday",
      startTime: "9:00",
      endTime: "11:00",
    },
    {
      id: 2,
      title: "English",
      day: "Tuesday",
      startTime: "10:00",
      endTime: "12:00",
    },
    {
      id: 3,
      title: "Science",
      day: "Wednesday",
      startTime: "12:00",
      endTime: "1:00",
    },
    {
      id: 3,
      title: "Science",
      day: "Wednesday",
      startTime: "2:00",
      endTime: "1:00",
    },
    {
      id: 4,
      title: "History",
      day: "Thursday",
      startTime: "2:00",
      endTime: "4:00",
    },
    { id: 5, title: "Art", day: "Friday", startTime: "1:00", endTime: "3:00" },
  ];
 
  return (
    <>
      <div>
        <form
          onSubmit={(event) => {
               event.preventDefault()
            const c = classes.find((c: any) => c.id == classId);
            setClassName(c.name);
          }}
        >
          <label htmlFor="class-selector">SELECT CLASS NAME</label>
          <select
            name="class_id"
            id="class-selector"
            onChange={(e: any) => {
              setClassID(e.target.value);
            }}
          >
            <option>Select Class</option>

            {classes.map((c: any) => (
              <option value={c.id}>{c.name}</option>
            ))}
          </select>
          <button type="submit"> OK</button>
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
                  const cellData = events.find(
                    (event: any) =>
                      event.day === day && event.startTime == timeSlot.startDate
                  );
                  return (
                    <td className={cellData?.title} key={day}>
                      {cellData ? cellData.title : null}
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
