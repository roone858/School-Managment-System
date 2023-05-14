import "../../style/details.css";
import maleAvatar from "../../assets/maleAvatar.png";
import femaleAvatar from "../../assets/femaleAvatar.png";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { State, Student } from "../../types/type";

const StudentDetails = () => {
  const params = useParams();

  const students = useSelector((state: State) => state.students.data);
  const student = students.find(
    (student: Student) => student.id == Number(params.id)
  );

  return (
    <div className="details container p-4">
      {!student ? (
        <div>loading...</div>
      ) : (
        <>
          <div className="card mh-15 w-50 student-image">
            <img
              src={student.gender == "M" ? maleAvatar : femaleAvatar}
              alt=""
            />
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">
                {student.first_name + " " + student.last_name}
              </h5>
              <span>Student</span>
              <p className="mb-0">
                Some quick example text to build on the panel title and make up
                the bulk of the panel's content.
              </p>
            </div>
            <ul className="about-content list-group list-group-flush">
              <li className="list-group-item">
                <span>Gender :</span>
                <span>{student.gender}</span>
              </li>
              <li className="list-group-item">
                <span>Address :</span>
                <span>{student.address}</span>
              </li>
              <li className="list-group-item">
                <span>Email :</span>
                <span>{student.email}</span>
              </li>
              <li className="list-group-item">
                <span>Phone :</span>
                <span>{student.phone}</span>
              </li>
            </ul>
            <div className="card-body">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={`/students/` + "update/" + params.id}
                type="button"
                className="btn btn-success  "
              >
                Update
              </Link>
              <button
                // onClick={() => handleDelete(student.id)}
                type="button"
                className="btn  btn-danger mx-2 "
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentDetails;
