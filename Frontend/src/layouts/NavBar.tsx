import React, { useState } from "react";
import profileImage from "../assets/avatar.png";

import { useParams, useLocation } from "react-router-dom";
import { getAdminFromCookie } from "../utils/cookies";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector } from "react-redux";
import "../style/navbar.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "red",
    color: "red",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.7)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
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
          <ul>
            {notifications.map((n: any) => (
              <li key={n.id}>{n.message}</li>
            ))}
          </ul>
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
