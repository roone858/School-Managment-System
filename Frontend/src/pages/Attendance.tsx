import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendanceService from "../services/attendance.service";
import Swal from "sweetalert2";
import {
  addAttendance,
  deleteAttendance,
} from "../redux/slice/attendance-slice";
import { Attendance, Subject, Student, State, Session, ClassType } from "../types/type";
import { Table } from "../Components/Table";
import AbsentButton from "../Components/AbsentButton";
import { currentDate } from "../utils/time";
const AttendanceCm = () => {
  const subjects = useSelector((state: State) => state.subjects);
  const students = useSelector((state: State) => state.students);
  const sessions = useSelector((state: State) => state.sessions);
  const classes = useSelector((state: State) => state.classes);
  const attendance = useSelector((state: State) => state.attendance);
  const dispatch = useDispatch();
  const [classId, seClassId] = useState();
  const [subjectId, setSubjectId] = useState();
  const [chosenSessionID, setChosenSessionID] = useState(0 as number);
  const selectedStudent: number[] = [];

  const handleApply = async () => {
 
    [...new Set(selectedStudent)].forEach(async (id) => {
      const attend = await AttendanceService.insertAttendance({
        student_id: id,
        class_session_id: chosenSessionID,
        subject_id: subjectId,
        date: new Date(),
        status: "Absent",
      });
      dispatch(addAttendance(attend));
    });
    setChosenSessionID(0);
  };
  const handleChose = async (id: number) => {
    setChosenSessionID(id);
  };

  return (
    <div className="attendance-section container">
      <form>
        <div className="form-row d-flex ">
          <div className="form-group col-3">
            <select
              className="form-control p-3"
              name="subject"
              onChange={(e: any) => {
                setSubjectId(e.target.value);
                setChosenSessionID(0);
              }}
            >
              <option>Select Subject</option>
              {subjects.map((subject: Subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-3">
            <select
              className="form-control p-3 mx-2"
              name="student"
              onChange={(e: any) => {
                seClassId(e.target.value);
                setChosenSessionID(0);
              }}
            >
              <option>Select Class</option>
              {classes?.map((cla: ClassType) => (
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
                (session: Session) =>
                  session.class_id == classId && session.subject_id == subjectId
              )
              .map((session: Session) => (
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
