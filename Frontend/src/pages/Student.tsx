import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "../css/student.css";
import StudentService from "../services/student.service";
import { Table } from "../Components/Table";
import { AddButton } from "../Components/AddButton";
import { TableRaw } from "../Components/TableRaw";
import { addStudent, deleteStudent } from "../features/slice/student-slice";
import {Student} from "../types/type"


export const Students = () => {
  const dispatch = useDispatch();
  const studentService = new StudentService();
  const students = useSelector((state: any) => state.students);
  const state = useSelector((state: any) => state);
  
  const handleDelete = (id: any) => {
    studentService.deleteStudent(id);
    dispatch(deleteStudent(id))
  };
  const handleDetails = (id: string) => {
   console.log(state)
  };

   useEffect(() => {
   if (students.length == 0) {
    studentService
       .getStudents()
       .then((result: any) =>
        result.map((student: any) => dispatch(addStudent(student)))
         ).then();
     }
   
   }, []);

    const studentElements = students.map((student: Student) => (
      <TableRaw key={student.id} entity={student} onDetailsClick={handleDetails} onDeleteClick={handleDelete} />
    ));
  return (
    <div className="students">
      <AddButton entity="student" text="Add New Student" />
      <Outlet />
      <button onClick={()=>{console.log(students)}}>show data</button>
       <Table rows={studentElements} />  
    </div>
  );
};
