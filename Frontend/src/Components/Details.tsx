import "../css/details.css";
import avatar from "../assets/avatar.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = (props: any) => {
  const params = useParams();
  const arr =props.array

  const obj = arr.filter((s: any) => s.id == params.id)[0];

  return (
    <div className="details">
      {!obj ? (
        <div>loading...</div>
      ) : (
        <>
          <div className="card mh-15 w-50 student-image">
            <img src={avatar} alt="" />
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">
                {obj.firstname + " " + obj.lastname}
              </h5>
              <p className="mb-0">
                Some quick example text to build on the panel title and make up
                the bulk of the panel's content.
              </p>
            </div>
            <ul className="about-content list-group list-group-flush">
              <li className="list-group-item">
                <span>Gender :</span>
                <span>{obj.gender}</span>
              </li>
              <li className="list-group-item">
                <span>Address :</span>
                <span>{obj.address}</span>
              </li>
              <li className="list-group-item">
                <span>Email :</span>
                <span>{obj.email}</span>
              </li>
              <li className="list-group-item">
                <span>Phone :</span>
                <span>{obj.phone}</span>
              </li>
            </ul>
            <div className="card-body">
              <a href="#!" className="card-link">
                Card link
              </a>
              <a href="#!" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
