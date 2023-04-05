import React, { useEffect, useState } from "react";
import { AddButton } from "../Components/AddButton";
import { Table } from "../Components/Table";
import { Outlet } from "react-router-dom";
import TeacherService from "../services/teacher.service";
import { TableRaw } from "../Components/TableRaw";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher, deleteTeacher } from "../redux/slice/teacher-slice";
interface Teacher {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
}
export const Teachers = () => {
  const dispatch = useDispatch();

  const teachers = useSelector((state: any) => state.teachers);
  const handleDelete = (id: string) => {
    const Db = new TeacherService();
    Db.deleteTeacher(id);
    dispatch(deleteTeacher(Number(id)));
  };

  const teachersRaws = teachers.map((teacher: Teacher) => (
    <TableRaw
      url="teachers"
      key={teacher.id}
      entity={teacher}
      onDeleteClick={handleDelete}
    />
  ));
  return (
    <div className="teachers">
      <AddButton entity="teacher" text="Add New teacher" />
      <Outlet />
      <Table rows={teachersRaws} />
    </div>
  );
};
