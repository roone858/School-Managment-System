import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../store/actions/studentActions";
import Card from "../Components/Card";
import image from "../assets/Back-end-dev-ProCert.png";
import image1 from "../assets/Data-analyses.png";
import image2 from "../assets/DevOps-Cloud-Agile-Specialization-Final.png";
import image3 from "../assets/MLS.subject-banners-01_Subject-Logo-.png";
import image4 from "../assets/subject1.png";
import { AddButton } from "../layouts/AddButton";
import { Subject, State, Teacher } from "../types/type";
import { Link, Outlet, useNavigate } from "react-router-dom";
import IconTabs from "../Components/mui/IconTabs";
import Swal from "sweetalert2";

export const Subjects = () => {
  const navigate = useNavigate();
  const images = [image, image1, image2, image3, image4];
  const teaching = useSelector((state: any) => state.teaching);
  const subjects = useSelector((state: any) => state.subjects);
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
        
      }
    });
  };
  const subjectsRows = teaching.map((teach: any) => {
    const subject = subjects.find((subject: any) => teach.subject_id == subject.id);
    const teacher = teachers.find( (teacher: any) => teach.teacher_id == teacher.id);
    return  (
      <tr className="bg-fff" key={subject.id}>
        <th scope="row">{subject.id}</th>
        <td>{subject.title}</td>
        <td>{teach.grade_level}</td>
        <td>{teacher.name }</td>
        <td>
          {/* to={"/students/"+obj.id} */}
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/subjects/` + subject.id}
            type="button"
            className="btn btn-primary btn-sm "
          >
            Details
          </Link>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/subjects/` + "update/" + subject.id}
            type="button"
            className="btn btn-success btn-sm mx-2 "
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(subject.id)}
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
        ADD NEW COURSE
      </Link>
      <Outlet />
      <IconTabs columns={["ID","Title","Level","Teacher","Action"]} rows={subjectsRows} />
    </>
  );
};
