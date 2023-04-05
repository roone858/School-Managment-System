import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "../style/student.css";
import StudentService from "../services/student.service";
import { Table } from "../Components/Table";
import { AddButton } from "../Components/AddButton";
import { TableRaw } from "../Components/TableRaw";
import { addStudent, deleteStudent } from "../redux/slice/student-slice";
import { Student } from "../types/type";

export const Students = () => {
  const students = useSelector((state: any) => state.students);
  const dispatch = useDispatch();
  const handleDelete = (id: any) => {
    const db = new StudentService();
    db.deleteStudent(id);
    dispatch(deleteStudent(id));
  };

  const studentRaws = students.map((student: Student) => (
    <TableRaw
      url="students"
      key={student.id}
      entity={student}
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
