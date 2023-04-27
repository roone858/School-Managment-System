import { useState } from "react";
import "../style/sidebar.css";
import ListElements from "../Components/sidebarComponents/ListElements";
import ProfileDetails from "../Components/sidebarComponents/ProfileDetails";
import Search from "../Components/sidebarComponents/Search";

// import logo from"../../public/school-svgrepo-com.svg"
export default function Sidebar(props: any) {
  const listItems = [
    { name: "Dashboard", icon: "bx-grid-alt",link:"/dashboard" },
    { name: "Student", icon: "bx-user" ,link:"/students"},
    { name: "Teachers", icon: "bx-user-voice",link:"/teachers" },
    { name: "Classes", icon: "bx-box",link:"/classes" },
    { name: "Subjects", icon: "bx-book",link:"/subjects" },
    { name: "Timetable", icon: "bx-table",link:"/timetable" },
    { name: "Attendance", icon: "bx-down-arrow-alt",link:"/attendance" },
    { name: "Setting", icon: "bx-cog",link:"/setting" },
  ];

  
  const [isActive, setActive] = useState(false);
  const toggleHandler = () => {
    isActive ? setActive(false) : setActive(true);
  };


  return (
    <>
      <div className={isActive ? "sidebar open" : "sidebar"}>
        <div className="logo-details">
          <i className="bx bx-book icon"></i>
     
          <div className="logo_name">WSchool</div>
          <i className="bx bx-menu" onClick={toggleHandler} id="btn"></i>
        </div>
        <ul className="sidebar-list">
          <Search onChange={props.onChange}  onClick={toggleHandler} />
          <ListElements items={listItems} />
          <ProfileDetails />
        </ul>
      </div>
    </>
  );
}
