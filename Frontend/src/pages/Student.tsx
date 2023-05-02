import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "../style/student.css";
import StudentService from "../services/student.service";
import { Table } from "../Components/Table";
import { AddButton } from "../layouts/AddButton";
import { deleteStudent } from "../redux/slice/student-slice";
import { ClassType, State, Student } from "../types/type";
import Swal from "sweetalert2";
import image from "../assets/dash-icon-01.svg";
import maleAvatar from "../assets/maleAvatar.png";
import femaleAvatar from "../assets/femaleAvatar.png";
import { useState } from "react";
import { Input } from "../Components/Input";
import AddStudent from "../Components/AddComponents/AddStudent";
export const Students = () => {
  const students = useSelector((state: State ) => state.students);
  const classes = useSelector((state: State) => state.classes);
  const [classId, setClassId] = useState();
  const [studentId, setStudentId] = useState();
  const [studentName, setStudentName] = useState();
  const dispatch = useDispatch();
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
        const response = await StudentService.deleteStudent(id);
        dispatch(deleteStudent(id));
        Swal.fire(" Deleted!", "student deleted", "success");
      }
    });
  };
  const GetStudentByID = ():any => {
    const student = students.find((student: Student) => student.id == studentId);
    return (
      student && (
        <tr className="bg-fff" key={student.id}>
          <th scope="row">{student.id}</th>
          <td>
            <img
              src={student.gender == "M" ? maleAvatar : femaleAvatar}
              style={{ height: "30px" }}
            />
          </td>
          <td> {student.first_name + " " + student.last_name}</td>
          <td>{student.dob.slice(0, 10)}</td>
          <td>{student.address}</td>

          <td>{classes.find((cl: ClassType) => student.class_id == cl.id)?.name}</td>
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
  const GetStudentByName = ():any => {
    const studentFilter = students.filter((student: Student) =>
      (student.first_name + " " + student.last_name)
        .toLowerCase()
        .includes(String(studentName))
    );
    return studentFilter.map(
      (student: Student) =>
        student && (
          <tr className="bg-fff" key={student.id}>
            <th scope="row">{student.id}</th>
            <td>
              <img
                src={student.gender == "M" ? maleAvatar : femaleAvatar}
                style={{ height: "30px" }}
              />
            </td>
            <td> {student.first_name + " " + student.last_name}</td>
            <td>{student.dob.slice(0, 10)}</td>
            <td>{student.address}</td>

            <td>
              {classes.find((cl: ClassType) => student.class_id == cl.id)?.name}
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
  const GetStudentByClass = ():any => {
    const studentFilter = students.filter(
      (student: Student) => student.class_id == classId
    );
    return studentFilter.map(
      (student: Student) =>
        student && (
          <tr className="bg-fff" key={student.id}>
            <th scope="row">{student.id}</th>
            <td>
              <img
                src={student.gender == "M" ? maleAvatar : femaleAvatar}
                style={{ height: "30px" }}
              />
            </td>
            <td> {student.first_name + " " + student.last_name}</td>
            <td>{student.dob.slice(0, 10)}</td>
            <td>{student.address}</td>

            <td>
              {classes.find((cla: ClassType) => student.class_id == cla.id)?.name}
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
            <img
              src={student.gender == "M" ? maleAvatar : femaleAvatar}
              style={{ height: "30px" }}
            />
          </td>
          <td> {student.first_name + " " + student.last_name}</td>
          <td>{student.dob.slice(0, 10)}</td>
          <td>{student.address}</td>

          <td>{classes.find((cl: ClassType) => student.class_id == cl.id)?.name}</td>
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
      <div className="students-section container">
        <button
          onClick={() => {
            setIsAddOpen(!isAddOpen);
          }}
          className="btn btn-primary "
        >
          Add new Student
        </button>
        {isAddOpen && <AddStudent />}
        <form className=" d-flex mt-4 ">
          <div className=" d-flex gap-3">
            <div className={"form-group "}>
              <input
                onChange={(e: any) => {
                  setStudentId(e.target.value);
                }}
                name="first_name"
                type="text"
                className="form-control p-3"
                id="first-name"
                placeholder="Search By ID..."
                required
              />
            </div>
            <div className={"form-group   "}>
              <input
                onChange={(e: any) => {
                  setStudentName(e.target.value);
                }}
                name="last_name"
                type="text"
                className="form-control p-3"
                id="last-name"
                placeholder="Search By Name..."
                required
              />
            </div>
            <div className="form-group  ">
              <select
                style={{ color: "#7c7c7c" }}
                className="form-group p-3"
                name="class_id"
                onChange={(e: any) => {
                  setClassId(e.target.value);
                }}
              >
                <option value={undefined}>Search By Class</option>
                {classes.map((cla: ClassType) => (
                  <option key={cla.id} value={cla.id}>
                    {cla.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <div className="students">
          <Table
            columns={[
              "ID ",
              "Photo",
              "Name",
              "DOP",
              "Address",
              "Class",
              "Actions",
            ]}
            rows={studentRaws}
          />
        </div>
      </div>
    </>
  );
};
