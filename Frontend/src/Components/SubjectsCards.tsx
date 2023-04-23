import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../store/actions/studentActions";
import Card from "./Card";
import image from "../assets/Back-end-dev-ProCert.png";
import image1 from "../assets/Data-analyses.png";
import image2 from "../assets/DevOps-Cloud-Agile-Specialization-Final.png";
import image3 from "../assets/MLS.subject-banners-01_Subject-Logo-.png";
import image4 from "../assets/subject1.png";
import { AddButton } from "../layouts/AddButton";
import { Subject, Teacher } from "../types/type";
import { Link, Outlet, useNavigate } from "react-router-dom";
import IconTabs from "./mui/IconTabs";

export const SubjectsCards = () => {
  const images = [image, image1, image2, image3, image4];
  const subjects = useSelector((state: any) => state.subjects);
  const subjectsCards = subjects.map((subject: Subject, index: number) => {

    return (
      <div key={subject.id} className="col-md-4 mb-4 col-sm-6">
        <Card
          image={images[index]}
          title={subject.title}
          description={subject.description.slice(0, 100) + "..."}
        />
      </div>
    );
  });
  return (
    <>
      <div className="row gap-row-3 ">{subjectsCards}</div>
    </>
  );
};
