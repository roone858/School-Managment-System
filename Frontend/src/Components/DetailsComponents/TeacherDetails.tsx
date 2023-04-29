import "../../style/details.css";
import teacherAvatar from "../../assets/teacherAvatar.jpg";
import femaleAvatar from "../../assets/femaleAvatar.png";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TeacherDetails = () => {
  const params = useParams();

  const teachers = useSelector((state: any) => state.teachers);
  const teacher = teachers.find((s: any) => s.id == params.id);

  return (
    <div className="details container p-4">
      {!teacher ? (
        <div>loading...</div>
      ) : (
        <>
          <div className="card mh-15 w-50 teacher-image">
            <img src={teacherAvatar} alt="" />
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">
                {teacher.first_name + " " + teacher.last_name}
              </h5>
              <p className="mb-0">
                Some quick example text to build on the panel title and make up
                the bulk of the panel's content.
              </p>
            </div>
            <ul className="about-content list-group list-group-flush">
              <li className="list-group-item">
                <span>Gender :</span>
                <span>{teacher.gender}</span>
              </li>
              <li className="list-group-item">
                <span>Address :</span>
                <span>{teacher.address}</span>
              </li>
              <li className="list-group-item">
                <span>Email :</span>
                <span>{teacher.email}</span>
              </li>
              <li className="list-group-item">
                <span>Phone :</span>
                <span>{teacher.phone}</span>
              </li>
            </ul>
            <div className="card-body">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={`/teachers/` + "update/" + params.id}
                type="button"
                className="btn btn-success  "
              >
                Update
              </Link>
              <button
                // onClick={() => handleDelete(teacher.id)}
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

export default TeacherDetails;
