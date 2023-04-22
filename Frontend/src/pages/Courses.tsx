import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../store/actions/studentActions";
import Card from "../Components/Card";
import image from "../assets/Back-end-dev-ProCert.png";
import image1 from "../assets/Data-analyses.png";
import image2 from "../assets/DevOps-Cloud-Agile-Specialization-Final.png";
import image3 from "../assets/MLS.course-banners-01_Course-Logo-.png";
import image4 from "../assets/course1.png";
import { AddButton } from "../layouts/AddButton";
import { Course, State, Teacher } from "../types/type";
import { Link, Outlet, useNavigate } from "react-router-dom";
import IconTabs from "../Components/mui/IconTabs";
import Swal from "sweetalert2";
const rows = [
  { id: 1, title: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
];
export const Courses = () => {
  const navigate = useNavigate();
  const images = [image, image1, image2, image3, image4];
  const teaching = useSelector((state: any) => state.teaching);
  const courses = useSelector((state: any) => state.courses);
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
  const coursesRows = teaching.map((teach: any) => {
    const course = courses.find((course: any) => teach.course_id == course.id);
    const teacher = teachers.find( (teacher: any) => teach.teacher_id == teacher.id);
    return  (
      <tr className="bg-fff" key={course.id}>
        <th scope="row">{course.id}</th>
        <td>{course.title}</td>
        <td>{teach.section}</td>
        <td>{teacher.first_name + " "+ teacher.last_name}</td>
        <td>
          {/* to={"/students/"+obj.id} */}
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/courses/` + course.id}
            type="button"
            className="btn btn-primary btn-sm "
          >
            Details
          </Link>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/courses/` + "update/" + course.id}
            type="button"
            className="btn btn-success btn-sm mx-2 "
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(course.id)}
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
      <IconTabs columns={["ID","Title","Section","Teacher","Action"]} rows={coursesRows} />
    </>
  );
};
