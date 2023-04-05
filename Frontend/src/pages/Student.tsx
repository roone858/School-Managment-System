import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "../css/student.css";
import StudentService from "../services/student.service";
import { Table } from "../Components/Table";
import { AddButton } from "../Components/AddButton";
import { TableRaw } from "../Components/TableRaw";
import { addStudent, deleteStudent } from "../features/slice/student-slice";
import { Student } from "../types/type";

export const Students = () => {
  const students = useSelector((state: any) => state.students);
  const dispatch = useDispatch();
  const handleDelete = (id: any) => {
  
    const studentService = new StudentService();
    studentService.deleteStudent(id);
    dispatch(deleteStudent(id));
  };

  const studentElements = students.map((student: Student) => (
    <TableRaw url="students" key={student.id} entity={student} onDeleteClick={handleDelete} />
  ));
  return (
    <div className="students">
      <AddButton entity="student" text="Add New Student" />
      <Outlet />
      <Table rows={studentElements} />
    </div>
  );
};
