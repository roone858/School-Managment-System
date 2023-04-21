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
import { Course, Teacher } from "../types/type";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Courses = () => {
  const navigate = useNavigate();
  const images = [image, image1, image2, image3, image4];
  const courses = useSelector((state: any) => state.courses);
  const teachers = useSelector((state: any) => state.teachers);
  const coursesCards = courses.map((course: Course, index: number) => {

    return (
      <div key={course.id} className="col-md-4 mb-4 col-sm-6">
        <Card
          image={images[index]}
          title={course.title}
          description={course.description.slice(0, 100) + "..."}
        />
      </div>
    );
  });
  return (
    <>
      <Link className="btn btn-primary mb-4" to={"add"}>ADD NEW COURSE</Link>
      <Outlet />
      <AddButton />
      <div className="row gap-row-3 ">{coursesCards}</div>
    </>
  );
};
