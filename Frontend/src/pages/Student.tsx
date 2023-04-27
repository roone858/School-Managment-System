import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "../style/student.css";
import StudentService from "../services/student.service";
import { Table } from "../Components/Table";
import { AddButton } from "../layouts/AddButton";
import { deleteStudent } from "../redux/slice/student-slice";
import { Student } from "../types/type";
import Swal from "sweetalert2";
import image from "../assets/dash-icon-01.svg";
import { useState } from "react";
import { Input } from "../Components/Input";
export const Students = () => {
  const students = useSelector((state: any) => state.students);
  const classes = useSelector((state: any) => state.classes);
  const [classId, setClassId] = useState();
  const [studentId, setStudentId] = useState();
  const [studentName, setStudentName] = useState();
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
  const GetStudentByID = () => {
    const student = students.find((student: any) => student.id == studentId);
    return (
      student && (
        <tr className="bg-fff" key={student.id}>
          <th scope="row">{student.id}</th>
          <td>
            {" "}
            <img src={image} style={{ width: "10%" }} />
            {student.first_name + " " + student.last_name}
          </td>
          <td>{student.dob.slice(0, 10)}</td>
          <td>{student.address}</td>

          <td>{classes.find((cl: any) => student.class_id == cl.id)?.name}</td>
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
      )
    );
  };
  const GetStudentByName = () => {
    const studentFilter = students.filter((student: any) =>
      (student.first_name + " " + student.last_name).includes(studentName)
    );
    return studentFilter.map(
      (student: Student) =>
        student && (
          <tr className="bg-fff" key={student.id}>
            <th scope="row">{student.id}</th>
            <td>
              {" "}
              <img src={image} style={{ width: "10%" }} />
              {student.first_name + " " + student.last_name}
            </td>
            <td>{student.dob.slice(0, 10)}</td>
            <td>{student.address}</td>

            <td>
              {classes.find((cl: any) => student.class_id == cl.id)?.name}
            </td>
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
        )
    );
  };
  const GetStudentByClass = () => {
    const studentFilter = students.filter(
      (student: any) => student.class_id == classId
    );
    return studentFilter.map(
      (student: Student) =>
        student && (
          <tr className="bg-fff" key={student.id}>
            <th scope="row">{student.id}</th>
            <td>
              {" "}
              <img src={image} style={{ width: "10%" }} />
              {student.first_name + " " + student.last_name}
            </td>
            <td>{student.dob.slice(0, 10)}</td>
            <td>{student.address}</td>

            <td>
              {classes.find((cl: any) => student.class_id == cl.id)?.name}
            </td>
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
        )
    );
  };
  const studentRaws =
    studentId || studentName || classId ? (
      <>
        {studentId && <GetStudentByID />}
        {studentName && <GetStudentByName />}
        {classId && <GetStudentByClass />}
      </>
    ) : (
      students.map((student: Student) => (
        <tr className="bg-fff" key={student.id}>
          <th scope="row">{student.id}</th>
          <td>
            {" "}
            <img src={image} style={{ width: "10%" }} />
            {student.first_name + " " + student.last_name}
          </td>
          <td>{student.dob.slice(0, 10)}</td>
          <td>{student.address}</td>

          <td>{classes.find((cl: any) => student.class_id == cl.id)?.name}</td>
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
      ))
    );

  return (
    <>
      <form className=" d-flex ">
        <div className="form-row d-flex  col-8 gap-2">
          <Input
            onChange={(e: any) => {
              setStudentId(e.target.value);
            }}
            type="text"
            placeholder="Search By ID ..."
          />
          <Input
            onChange={(e: any) => {
              setStudentName(e.target.value);
            }}
            type="text"
            placeholder="Search By Name ..."
          />
          <div className="form-group col-4">
            <label></label>
            <select
              className="form-control"
              name="class_id"
              onChange={(e: any) => {
                setClassId(e.target.value);
              }}
            >
              <option>Search By Class</option>
              {classes.map((cla: any) => (
                <option key={cla.id} value={cla.id}>
                  {cla.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
     
      <div className="students">
        <AddButton />
        <Outlet />
        <Table
          columns={["ID ", "Name", "DOP", "Address", "Class", "Actions"]}
          rows={studentRaws}
        />
      </div>
    </>
  );
};
