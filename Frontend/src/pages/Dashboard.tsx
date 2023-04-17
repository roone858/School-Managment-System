

import "../style/dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import AdminService from "../services/admin.service"

import { addNotification ,  setRedFlag} from "../redux/slice/notifications-slice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: any) => state.students);
  const teachers = useSelector((state: any) => state.teachers);
  const courses = useSelector((state: any) => state.courses);

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
            <span>Course</span>
            <span> {courses.length}</span>
          </div>
        </div>
        <button
          onClick={() => {
            new AdminService().insertAdmin({
 
              "firstName": "Hassan",
              "lastName": "Ammer",
              "userName": "hassan",
              "email": "hassan.dev@gmail.com",
              "password": "hassan"
          })
            dispatch(
              setRedFlag(true)
            );
          }}
        >
           Insert Hassan admin
        </button>
      </div>
    </>
  );
};
