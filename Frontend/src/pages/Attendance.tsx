import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendanceService from "../services/attendance.service";
import Swal from "sweetalert2";
import { addAttendance } from "../redux/slice/attendance-slice";

const Attendance = () => {
  const courses = useSelector((state: any) => state.courses);
  const students = useSelector((state: any) => state.students);

  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState({});
  const [courseTitle, setCourseTitle] = useState({});
  const attendance = useSelector((state: any) => state.attendance);
  const db = new AttendanceService();
  var currentDate = new Date();
  var datetime =
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear() +
    " - " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.target.reset();
    const { id } = courses.find((course: any) => course.title == courseTitle);
    db.insertAttendance({ studentId: studentId, courseId: id });
    dispatch(
      addAttendance({
        studentid: studentId,
        courseid: id,
        attenddate: datetime,
      })
    );
    Swal.fire(" Accepted!", "student inserted successfully", "success");
  };
  return (
    <div className="attendance">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Course title :</label>
          <select
            className="form-control"
            name="course"
            onChange={(e: any) => {
              setCourseTitle(e.target.value);
            }}
          >
            <option>Default select</option>
            {courses.map((course: any) => (
              <option key={course.id}>{course.title}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Student ID :</label>
          <select
            className="form-control"
            name="student"
            onChange={(e: any) => {
              setStudentId(e.target.value);
            }}
          >
            <option>Default select</option>
            {students.map((student: any) => (
              <option key={student.id}>{student.id}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          submit
        </button>
      </form>
      <div className="attendance-table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Title</th>
              <th scope="col">Student Id</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((att: any) => (
              <tr key={att.id}>
                <th scope="row">{att.id}</th>
                <td>{att.courseid}</td>
                <td>{att.studentid}</td>
                <td>{att.attenddate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
