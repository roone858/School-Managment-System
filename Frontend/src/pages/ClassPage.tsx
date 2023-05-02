import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../Components/Table";
import { Link } from "react-router-dom";
import ClassService from "../services/class.service";
import { deleteClass } from "../redux/slice/class-slice ";
import Swal from "sweetalert2";
import SessionService from "../services/session.service";
import AddClass from "../Components/AddComponents/AddClass";
import { ClassType, State, Student } from "../types/type";

export const ClassPage = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state: State) => state.classes);
  const students = useSelector((state: State) => state.students);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleDelete = (id: number) => {
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
        const sessionResponse = await SessionService.deleteSessionByClassID(id);
        const classResponse = await ClassService.deleteClass(id);
      
        if (classResponse.ok ) {
          dispatch(deleteClass(id));
          Swal.fire(" Deleted!", "Class deleted", "success");
        }
       else{
        Swal.fire("Can't Deleted!", "There is err check api ", "error");
       }
      }
    });
  };
  const classesRows = classes.map((obj: ClassType) => {
    const studentFilter = students.filter(
      (student: Student) => student.class_id == obj.id
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
      <div className="class-section container">
      <button
          onClick={() => {
            setIsAddOpen(!isAddOpen);
          }}
          className="btn btn-primary "
        >
          Add new class
        </button>
        {isAddOpen && <AddClass />}
       
        <div className="class-page">
          <Table
            columns={["ID", "Name", "Grade Level", "Students", "Actions"]}
            rows={classesRows}
          />
        </div>
      </div>
    </>
  );
};
