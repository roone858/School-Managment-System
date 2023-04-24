import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendanceService from "../services/attendance.service";
import Swal from "sweetalert2";
import {
  addAttendance,
  deleteAttendance,
} from "../redux/slice/attendance-slice";
import { Attendance, Subject, Student } from "../types/type";
const AttendanceCm = () => {
  const subjects = useSelector((state: any) => state.subjects);
  const students = useSelector((state: any) => state.students);

  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState({});
  const [subjectTitle, setSubjectTitle] = useState({});
  const attendance = useSelector((state: any) => state.attendance);
  const attendanceRows = attendance.map((att: Attendance) => {
    const subject = subjects?.find(
      (subject: Subject) => String(subject.id) == String(att.subjectid)
    );
    return (
      <tr key={att.id}>
        <th scope="row">{att.id}</th>
        <td>{subject?.title}</td>
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


  const handleCancel = async (id: any) => {
    const result = await AttendanceService.deleteAttendance(id);
    dispatch(deleteAttendance(id));
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const subject = await subjects.find(
      (subject: Subject) => subject.title == subjectTitle
    );
    const attend = await AttendanceService.insertAttendance({
      studentId: studentId,
      subjectId: subject.id,
    });

    dispatch(addAttendance(attend));
    Swal.fire(" Accepted!", "student inserted successfully", "success");
    event.target.reset();
  };
  return (
    <div className="attendance">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Subject title :</label>
          <select
            className="form-control"
            name="subject"
            onChange={(e: any) => {
              setSubjectTitle(e.target.value);
            }}
          >
            <option>Default select</option>
            {subjects.map((subject: Subject) => (
              <option key={subject.id}>{subject.title}</option>
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
              <th scope="col">Subject Title</th>
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
