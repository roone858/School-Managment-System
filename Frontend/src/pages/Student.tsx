import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "../style/student.css";
import StudentService from "../services/student.service";
import { Table } from "../Components/Table";
import { AddButton } from "../layouts/AddButton";
import {  deleteStudent } from "../redux/slice/student-slice";
import { Student } from "../types/type";
import Swal from "sweetalert2";
import image from "../assets/dash-icon-01.svg"
export const Students = () => {
  const students = useSelector((state: any) => state.students);
  const classes = useSelector((state: any) => state.classes);

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
    }).then(async (result) => {
      if (result.isConfirmed) {
      
          const response = await StudentService.deleteStudent(id);
          dispatch(deleteStudent(id));
          Swal.fire(" Deleted!", "student deleted", "success");
      }
    });
  };

  const studentRaws = students.map((student: Student) => (
    
      <tr className="bg-fff" key={student.id}>
        <th scope="row">{student.id}</th>
        <td> <img src={image} style={{"width": "10%"}} />{student.first_name+" "+student.last_name}</td>
        <td>{student.dob}</td>
        <td>{student.address}</td>
        <td>{classes.find((cl:any)=> student.class_id==cl.id)?.name }</td>
        <td>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/students/` + student.id}
            type="button"
            className="btn btn-primary btn-sm "
          >
            Details
          </Link>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/students/` + "update/" + student.id}
            type="button"
            className="btn btn-success btn-sm mx-2 "
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(student.id)}
            type="button"
            className="btn  btn-danger btn-sm "
          >
            Delete
          </button>
        </td>
      </tr>
    
  ));
  return (
    <div className="students">
      <AddButton  />
      <Outlet />
      <Table columns={['ID ','Name','DOP','Address','Class','Actions']} rows={studentRaws} />
    </div>
  );
};
