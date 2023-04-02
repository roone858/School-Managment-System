import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../css/student.css";
import StudentService from "../store/services/student.service";
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
  const dispatch = useDispatch();
  const studentService = new StudentService();
  const students =useSelector((state:any) => state.students)

  useEffect(() => {
    
    if (students.length==0)
       studentService.getStudents(dispatch);
    
  }, []);

  const handleDelete = (id: string) => {
    studentService.deleteStudent(dispatch,id);
    
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
