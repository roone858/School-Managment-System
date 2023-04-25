import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../Components/Table";
import { Link } from "react-router-dom";
import ClassService from "../services/class.service";
import { deleteClass } from "../redux/slice/class-slice ";
import Swal from "sweetalert2";
import SessionService from "../services/session.service";

export const ClassPage = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state: any) => state.classes);
  const students = useSelector((state: any) => state.students);
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
        const session = SessionService.deleteSessionByClassID(id);
        const response = await ClassService.deleteClass(id);
        dispatch(deleteClass(id));
        Swal.fire(" Deleted!", "Class deleted", "success");
      }
    });
  };
  const classesRows = classes.map((obj: any) => {
    const studentFilter = students.filter(
      (student: any) => student.class_id == obj.id
    );
    return (
      <tr className="bg-fff" key={obj.id}>
        <th scope="row">{obj.id}</th>
        <td>{obj.name}</td>
        <td>{obj.grade_level}</td>
        <td>{studentFilter.length}</td>
        <td>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/classes/` + obj.id}
            type="button"
            className="btn btn-primary btn-sm "
          >
            Details
          </Link>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/classes/` + "update/" + obj.id}
            type="button"
            className="btn btn-success btn-sm mx-2 "
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(obj.id)}
            type="button"
            className="btn  btn-danger btn-sm "
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Link className="btn btn-primary mb-4" to={"add"}>
        Add New Class
      </Link>
      <div className="class-page">
        <Table
          columns={["ID", "Name", "Grade Level", "Students", "Actions"]}
          rows={classesRows}
        />
      </div>
    </>
  );
};
