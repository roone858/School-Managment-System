import { Link } from "react-router-dom";
import { ClassType, Student } from "../../types/type";

const GetStudentByClass = ({
  students,
  classes,
  classId,
  handleDelete,
  maleAvatar,
  femaleAvatar,
}: any): any => {
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
export default GetStudentByClass;
