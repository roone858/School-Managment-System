import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import StudentService from "../services/student.service";
import TeacherService from "../services/teacher.service";
import { deleteStudent } from "../redux/slice/student-slice";
import { useDispatch } from "react-redux";
import { deleteTeacher } from "../redux/slice/teacher-slice";
export const TableRaw = ({
  obj,
  onDeleteClick,
  onUpdateClick,
  onDetailsClick,
  url,
}: any) => {
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
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Student has been deleted.", "success");
        if (url == "students") {
          const db = new StudentService();
          db.deleteStudent(id);
          dispatch(deleteStudent(id));
        }
        if (url == "teachers") {
          const db = new TeacherService();
          db.deleteTeacher(id);
          dispatch(deleteTeacher(id));
        }
      }
    });
  };

  return (
    <tr key={obj.id}>
      <th scope="row">{obj.id}</th>
      <td>{obj.firstname}</td>
      <td>{obj.lastname}</td>
      <td>{obj.address}</td>
      <td>
        {/* to={"/students/"+obj.id} */}
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={`/${url}/` + obj.id}
          type="button"
          className="btn btn-primary btn-sm "
        >
          Details
        </Link>
        <button type="button" className="btn btn-success btn-sm ml-3 mr-3">
          Update
        </button>
        <button
          onClick={() => handleDelete(obj.id)}
          type="button"
          className="btn btn-danger btn-sm "
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
