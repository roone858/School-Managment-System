import "../style/dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import AdminService from "../services/admin.service";

import {
  addNotification,
  setRedFlag,
} from "../redux/slice/notifications-slice";
import { currentDay, currentHours } from "../utils/time";
import { Table } from "react-bootstrap";
import {
  Attendance,
  ClassType,
  Session,
  State,
  Subject,
  Teacher,
  Teaching,
} from "../types/type";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: State) => state.students);
  const teachers = useSelector((state: State) => state.teachers);
  const teaching = useSelector((state: State) => state.teaching);
  const subjects = useSelector((state: State) => state.subjects);
  const sessions = useSelector((state: State) => state.sessions);
  const classes = useSelector((state: State) => state.classes);
  const attendanceList = useSelector((state: State) => state.attendance);
  const attendance = attendanceList.slice(1).reverse();

  return (
    <>
      <div className="dashboard-section  container">
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
            <i className="bx bxs-book"></i>
            <div className="num">
              <span>Subject</span>
              <span> {subjects.length}</span>
            </div>
          </div>
        </div>
        <div className="d-flex m-2 justify-content-around gap-3 ">
          <div className="current-session col-6 p-4 bg-white rounded-4">
            <h3 className="m-2 ">Current Sessions</h3>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Subject</th>
                  <th scope="col">Class</th>
                  <th scope="col">Start</th>
                  <th scope="col">End</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session: Session) => {
                  if (
                    session.day == currentDay() &&
                    Number(session.start_time.slice(0, 2)) == currentHours()
                  ) {
                    return (
                      <tr key={"session" + session.id}>
                        <th scope="row">
                          {" "}
                          {
                            subjects.find(
                              (subject: Subject) =>
                                session.subject_id == subject.id
                            )?.title
                          }
                        </th>
                        <td>
                          {" "}
                          {
                            classes.find(
                              (cla: ClassType) => cla.id === session.class_id
                            ).name
                          }
                        </td>
                        <td>{session.start_time}</td>
                        <td>{session.end_time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          <div className="last-absence col-6 p-4 bg-white rounded-4">
            <h3 className="m-2 ">Last Absence</h3>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Student</th>
                  <th scope="col">Class</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {attendance.slice(0, 5).map((attend: Attendance) => {
                  return (
                    <tr key={"attend" + attend.id}>
                      <td>
                        {students.map((student: any) => {
                          return (
                            attend.student_id == student.id &&
                            student.first_name + " " + student.last_name
                          );
                        })}
                      </td>
                      <td>
                        {
                          classes.find(
                            (cla: any) =>
                              cla.id ==
                              sessions.find(
                                (session: any) =>
                                  session.id == attend.class_session_id
                              )?.class_id
                          )?.name
                        }
                      </td>
                      <th scope="row">
                        {" "}
                        {
                          subjects.find(
                            (subject: Subject) =>
                              attend.subject_id == subject.id
                          )?.title
                        }
                      </th>
                      <td>{attend.date.slice(0, 10)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="Today-sessions col-12 p-4 my-3 bg-white rounded-4">
          <h3 className="m-2 ">Today's Sessions</h3>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Class</th>
                <th scope="col">Teacher</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session: Session) => {
                return (
                  session.day == "Sunday" && ( //currentDay()
                    <tr key={session.id}>
                      <td>
                        {
                          subjects.find(
                            (subject: Subject) =>
                              subject.id == session.subject_id
                          )?.title
                        }
                      </td>
                      <td>
                        {
                          classes.find(
                            (cla: ClassType) => cla.id == session.class_id
                          )?.name
                        }
                      </td>
                      <td>
                        {" "}
                        {
                          teachers.map((teacher: Teacher) => {
                            if (
                              teacher.id ==
                              teaching.find(
                                (teach: Teaching) =>
                                  teach.subject_id == session.subject_id
                              )?.teacher_id
                            )
                              return (
                                teacher.first_name + " " + teacher.last_name
                              );
                          })
                          // teachers.find((teacher:any)=>  teacher.id== ( teaching.find((teach:any)=> teach.subject_id == session.subject_id )?.teacher_id)).first_name
                        }
                      </td>
                      <td>{session.start_time}</td>
                      <td>{session.end_time}</td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
