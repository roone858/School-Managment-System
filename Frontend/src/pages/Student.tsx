import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "../style/student.css";
import StudentService from "../services/student.service";
import { Table } from "../Components/Table";
import { AddButton } from "../Components/AddButton";
import { TableRaw } from "../Components/TableRaw";
import { addStudent, deleteStudent } from "../redux/slice/student-slice";
import { Student } from "../types/type";
import Swal from "sweetalert2";
export const Students = () => {
  const students = useSelector((state: any) => state.students);
  const dispatch = useDispatch();

  const handleDelete = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete !",
    }).then( async(result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Student has been deleted.", "success");
        const db = new StudentService();
       const response =await db.deleteStudent(id);
       console.log(response)
        dispatch(deleteStudent(id));
      }
    });
  };

  const studentRaws = students.map((student: Student) => (
    <TableRaw
      url="students"
      key={student.id}
      obj={student}
      onDeleteClick={handleDelete}
    />
  ));
  return (
    <div className="students">
      <AddButton entity="student" text="Add New Student" />
      <Outlet />
      <Table rows={studentRaws} />
    </div>
  );
};
