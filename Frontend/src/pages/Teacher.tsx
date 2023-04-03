import React, { useEffect, useState } from "react";
import { AddButton } from "../Components/AddButton";
import { Table } from "../Components/Table";
import { Outlet } from "react-router-dom";
import TeacherService from "../services/teacher.service";
import { TableRaw } from "../Components/TableRaw";
import { useSelector } from "react-redux";
interface Teacher {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
}
export const Teachers = () => {


  const teachers = useSelector((state: any) => state.teachers);
  const teacherService = new TeacherService();
  const handleDelete = (id: string) => {
    teacherService.deleteTeacher(id);

  };
  useEffect(() => {
   
  }, []);
  const teacherElements = teachers.map((teacher: Teacher) => (
    <TableRaw key={teacher.id} entity={teacher} onDeleteClick={handleDelete} />
  ));
  return (
    <div className="teachers">
      <AddButton entity="teacher" text="Add New teacher" />
      <Outlet />
      <Table rows={teacherElements} />
    </div>
  );
};
