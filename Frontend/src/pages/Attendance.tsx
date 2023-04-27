import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendanceService from "../services/attendance.service";
import Swal from "sweetalert2";
import {
  addAttendance,
  deleteAttendance,
} from "../redux/slice/attendance-slice";
import { Attendance, Subject, Student } from "../types/type";
import { Table } from "../Components/Table";
import AbsentButton from "../Components/AbsentButton";
const AttendanceCm = () => {
  const subjects = useSelector((state: any) => state.subjects);
  const students = useSelector((state: any) => state.students);
  const sessions = useSelector((state: any) => state.sessions);
  const classes = useSelector((state: any) => state.classes);
  const selectedStudent: any[] = [];
  const dispatch = useDispatch();
  const [classId, seClassId] = useState();
  const [subjectId, setSubjectId] = useState();
  const [chosenSessionID, setChosenSessionID] = useState(0 as number);
  const attendance = useSelector((state: any) => state.attendance);

  const handleApply = () => {
    [...new Set(selectedStudent)].forEach((id) =>
      AttendanceService.insertAttendance({
        student_id: id,
        class_session_id: chosenSessionID,
        subject_id: subjectId,
        date: new Date(),
        status: "Absent",
      })
    );
    setChosenSessionID(0);
  };
  const handleChose = async (id: any) => {
    setChosenSessionID(id);
  };

  return (
    <div className="attendance">
      <form>
        <div className="form-row d-flex gap-2 ">
          <div className="form-group col-3">
            <label htmlFor="formGroupExampleInput">Subject title :</label>
            <select
              className="form-control"
              name="subject"
              onChange={(e: any) => {
                setSubjectId(e.target.value);
                setChosenSessionID(0)
              }}
            >
              <option>Default select</option>
              {subjects.map((subject: Subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-3">
            <label htmlFor="formGroupExampleInput2">Select Class :</label>
            <select
              className="form-control"
              name="student"
              onChange={(e: any) => {
                seClassId(e.target.value);
                setChosenSessionID(0)

              }}
            >
              <option>Default select</option>
              {classes?.map((cla: any) => (
                <option key={String(cla.id)} value={cla.id}>
                  {cla.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <div className="attendance-table">
        {!chosenSessionID ? (
          <Table
            columns={["Session ID", "Start Time ", "End Time", "Day"]}
            rows={sessions
              .filter(
                (session: any) =>
                  session.class_id == classId && session.subject_id == subjectId
              )
              .map((session: any) => (
                <tr key={session.id}>
                  <th scope="row">{session.id}</th>
                  <td>{session.start_time}</td>
                  <td>{session.end_time}</td>
                  <td>{session.day}</td>
                  <td>
                    <button
                      onClick={() => handleChose(session.id)}
                      type="button"
                      className="btn  btn-primary"
                      aria-label="Close"
                    >
                      {" "}
                      Chose
                    </button>
                  </td>
                </tr>
              ))}
          />
        ) : (
          <>
            <Table
              columns={["Student ID", "Student Name ", "Absent"]}
              rows={students.map(
                (student: Student) =>
                  student.class_id == classId && (
                    <tr key={student.id}>
                      <th scope="row">{student.id}</th>
                      <td>{student.first_name + " " + student.last_name}</td>
                      <td>
                        <div
                          onClick={() => {
                            selectedStudent.push(student.id);
                            console.log(selectedStudent);
                          }}
                        >
                          <AbsentButton />
                        </div>
                      </td>
                    </tr>
                  )
              )}
            />
            <button onClick={handleApply} className="btn btn-success">
              Apply
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AttendanceCm;
