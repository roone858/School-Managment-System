import React, { useState } from "react";
import profileImage from "../assets/avatar.png";

import { useParams, useLocation } from "react-router-dom";
import { getAdminFromCookie } from "../utils/cookies";

import NotificationsIcon from "@mui/icons-material/Notifications";
import StyledBadge from "../Components/mui/StyledBadge"
import { useSelector } from "react-redux";
import "../style/navbar.css";
import ListDividers from "../Components/mui/ListDividers";
import InsetDividers from "../Components/mui/InsetDividers";


const NavBar = () => {
  const notifications = useSelector((state: any) => state.notification);

  const location = useLocation();
  const header = location.pathname.split("/")[1];
  const admin = getAdminFromCookie();
  const [NotificationFlag, setNotificationFlag] = useState(false);
  return (
    <div className="navbar-section">
      {NotificationFlag && (
        <div className="notification">
        <InsetDividers/>
        </div>
      )}
      <div className="nav">
        <div className="page-name">
          {header == "" ? `Welcome ${admin.firstname}` : header}
        </div>
        <ul>
          <li>
            <div
              className={
                NotificationFlag
                  ? "notification-icon open"
                  : "notification-icon"
              }
            >
              <StyledBadge
                onClick={() => {
                  NotificationFlag
                    ? setNotificationFlag(false)
                    : setNotificationFlag(true);
                }}
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                variant="dot"
              >
                <NotificationsIcon />
              </StyledBadge>
            </div>
          </li>
          <li>
            <div className="navbar-profile">
              <img src={profileImage} alt="..." />
              <span className="mx-2">{admin.firstname}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
//
