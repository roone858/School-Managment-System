import { AddButton } from "../layouts/AddButton";
import { Table } from "../Components/Table";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Teacher } from "../types/type";
import Swal from "sweetalert2";
import TeacherService from "../services/teacher.service";
import { deleteTeacher } from "../redux/slice/teacher-slice";
import TeachingService from "../services/teaching.service";

export const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state: any) => state.teachers);

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
        await TeachingService.deleteTeaching(id)
        const response = await TeacherService.deleteTeacher(id);
        dispatch(deleteTeacher(id));
        Swal.fire(" Deleted!", "Teacher deleted", "success");
      }
    });
  };
  const teachersRaws = teachers.map((teacher: Teacher) => (
    <tr className="bg-fff" key={teacher.id}>
      <th scope="row">{teacher.id}</th>
      <td>{teacher.first_name+" "+teacher.last_name}</td>
      <td>{teacher.dob}</td>
      <td>{teacher.address}</td>

      <td>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={`/teachers/` + teacher.id}
          type="button"
          className="btn btn-primary btn-sm "
        >
          Details
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={`/teachers/` + "update/" + teacher.id}
          type="button"
          className="btn btn-success btn-sm mx-2 "
        >
          Update
        </Link>
        <button
          onClick={() => handleDelete(teacher.id)}
          type="button"
          className="btn  btn-danger btn-sm "
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="teachers">
      <AddButton />
      <Outlet />
      <Table
        columns={["ID ", "Name",'DOB', "Address", "Actions"]}
        rows={teachersRaws}
      />
    </div>
  );
};
