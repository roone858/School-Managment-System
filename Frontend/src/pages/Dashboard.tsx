import "../style/dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import AdminService from "../services/admin.service";

import {
  addNotification,
  setRedFlag,
} from "../redux/slice/notifications-slice";
import { currentDay, currentHours } from "../utils/time";
import { Table } from "react-bootstrap";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: any) => state.students);
  const teachers = useSelector((state: any) => state.teachers);
  const subjects = useSelector((state: any) => state.subjects);
  const sessions = useSelector((state: any) => state.sessions);
  const classes = useSelector((state: any) => state.classes);

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
            <span>Subject</span>
            <span> {subjects.length}</span>
          </div>
        </div>
      </div>
      <div className="current-session p-4" style={{ backgroundColor: "#fff" ,borderRadius:"20px"}}>
        <h3 className="m-2 ">Current Sessions</h3>
        <div className="d-flex">
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
              {sessions.map((session: any) => {
                if (
                  session.day == currentDay() &&
                  Number(session.start_time.slice(0, 2)) == currentHours()
                ) {
                  return (
                    <tr key={session.id}>
                      <th scope="row">
                        {" "}
                        {
                          subjects.find(
                            (subject:any) => session.subject_id == subject.id
                          ).title
                        }
                      </th>
                      <td>
                        {" "}
                        {classes.find((cla:any) => cla.id == session.class_id).name}
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
      </div>
    </>
  );
};
