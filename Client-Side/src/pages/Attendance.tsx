import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendanceService from "../services/attendance.service";
import Swal from "sweetalert2";
import {
  addAttendance,
  deleteAttendance,
} from "../redux/slice/attendance-slice";
import { Attendance, Course, Student } from "../types/type";
const AttendanceCm = () => {
  const courses = useSelector((state: any) => state.courses);
  const students = useSelector((state: any) => state.students);

  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState({});
  const [courseTitle, setCourseTitle] = useState({});
  const attendance = useSelector((state: any) => state.attendance);
  const attendanceRows = attendance.map((att: Attendance) => {
    const course = courses?.find(
      (course: Course) => String(course.id) == String(att.courseid)
    );
    return (
      <tr key={att.id}>
        <th scope="row">{att.id}</th>
        <td>{course?.title}</td>
        <td>{att.studentid}</td>
        <td>{att.attenddate}</td>
        <td>
          <button
            onClick={() => handleCancel(att.id)}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </td>
      </tr>
    );
  });
  const db = new AttendanceService();

  const handleCancel = async (id: any) => {
    const result = await db.deleteAttendance(id);
    dispatch(deleteAttendance(id));
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const course = await courses.find(
      (course: Course) => course.title == courseTitle
    );
    const attend = await db.insertAttendance({
      studentId: studentId,
      courseId: course.id,
    });

    dispatch(addAttendance(attend));
    Swal.fire(" Accepted!", "student inserted successfully", "success");
    event.target.reset();
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
            {courses.map((course: Course) => (
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
            {students?.map((student: Student) => (
              <option key={String(student.id)}>{String(student.id)}</option>
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
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>{attendanceRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceCm;
