import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../css/student.css";
import StudentService from "../services/student.service";

interface Student {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
}
export const Student = () => {
  const [students, setStudents] = useState([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const studentService = new StudentService();

  useEffect(() => {
    const fn = async () => {
      setStudents(await studentService.getStudents());
    };
    fn();
  }, []);

  const handleDelete = (id: string) => {
    studentService.deleteStudent(id);
    const update = students.filter((student: Student) => student.id != id);
    setStudents(update);
  };
  const studentElements = students.map((student: Student) => (
    <tr key={student.id}>
      <th scope="row">{student.id}</th>
      <td>{student.firstname}</td>
      <td>{student.lastname}</td>
      <td>{student.address}</td>
      <td>
        <button type="button" className="btn btn-primary btn-sm ">
          Details
        </button>
        <button type="button" className="btn btn-success btn-sm ml-3 mr-3">
          Update
        </button>
        <button
          onClick={() => handleDelete(student.id)}
          type="button"
          className="btn btn-danger btn-sm "
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="students">
      <Link
        onClick={() => {
          isCreateOpen ? setIsCreateOpen(false) : setIsCreateOpen(true);
        }}
        to={isCreateOpen ? "/students" : "/students/add"}
        type="button"
        className="btn btn-success mr-3"
      >
        ADD NEW STUDENT
      </Link>
      <Outlet />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Address</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>{studentElements}</tbody>
      </table>
    </div>
  );
};
