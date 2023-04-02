import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../css/student.css";
import StudentService from "../services/student.service";
import { Table } from "../Components/Table";
import { AddButton } from "../Components/AddButton";
import { TableRaw } from "../Components/TableRaw";

interface Student {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
}
export const Student = () => {
  const [students, setStudents] = useState([]);

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
    <TableRaw key={student.id} entity={student} onDeleteClick={handleDelete} />
  ));
  return (
    <div className="students">
      <AddButton entity="student" text="Add New Student" />
      <Outlet />
      <Table rows={studentElements} />
    </div>
  );
};
