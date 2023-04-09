import React from "react";
import "../style/navbar.css";
import profileImage from "../assets/profile.jpg";

import { useParams,useLocation } from "react-router-dom";
import { getAdminFromCookie } from "../utils/cookies";
const NavBar = () => {
     const location =useLocation()
     const header=location.pathname.split("/")[1]
     const admin = getAdminFromCookie();
  return (
    <div className="navbar-section">
      <div className="nav">
        <div className="page-name">{header}</div>
        <ul>
         
          <li >
              <div className="navbar-profile">
              <img src={profileImage} alt="..."  />
               <span>{admin.username}</span>
              </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
// 