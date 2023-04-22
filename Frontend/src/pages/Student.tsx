import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "../style/student.css";
import StudentService from "../services/student.service";
import NotificationService from "../services/notification.service";
import { Table } from "../Components/Table";
import { AddButton } from "../layouts/AddButton";
import { TableRaw } from "../Components/TableRaw";
import { addStudent, deleteStudent } from "../redux/slice/student-slice";
import { Student } from "../types/type";
import Swal from "sweetalert2";
export const Students = () => {
  const students = useSelector((state: any) => state.students);



  const studentRaws = students.map((student: Student) => (
    <TableRaw
      url="students"
      key={student.id}
      obj={student}
      
    />
  ));
  return (
    <div className="students">
      <AddButton  />
      <Outlet />
      <Table columns={['ID ','First Name','Last Name','Address','Actions']} rows={studentRaws} />
    </div>
  );
};
