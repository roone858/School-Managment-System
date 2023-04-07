import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../store/actions/studentActions";
import Card from "../Components/Card";
import image from "../assets/Back-end-dev-ProCert.png";
import image1 from "../assets/Data-analyses.png";
import image2 from "../assets/DevOps-Cloud-Agile-Specialization-Final.png";
import image3 from "../assets/MLS.course-banners-01_Course-Logo-.png";
import image4 from "../assets/course1.png";

export const Courses = () => {
  const images=[image,image1,image2,image3,image4]
  const courses = useSelector((state: any) => state.courses);
  return (
    <div className="home-section">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course: any,index:number) => (
          <div key={course.id} className="col">
            <Card image={images[index]} title={course.title} description={course.description.slice(0,100)+"..."} />
          </div>
        ))}
      </div>
    </div>
  );
};
