import { useState } from "react";
import "../style/sidebar.css";
import ListElements from "./sidebarComponents/ListElements";
import ProfileDetails from "./sidebarComponents/ProfileDetails";
import Search from "./sidebarComponents/Search";

// import logo from"../../public/school-svgrepo-com.svg"
export default function Sidebar(params: any) {
  const listItems = [
    { name: "Dashboard", icon: "bx-grid-alt",link:"/dashboard" },
    { name: "Student", icon: "bx-user" ,link:"/students"},
    { name: "Teachers", icon: "bx-user-voice",link:"/teachers" },
    { name: "Courses", icon: "bx-grid-alt",link:"/courses" },
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
          <Search onClick={toggleHandler} />
          <ListElements items={listItems} />
          <ProfileDetails />
        </ul>
      </div>
    </>
  );
}
