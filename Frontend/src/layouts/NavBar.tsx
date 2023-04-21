import React, { useState } from "react";
import profileImage from "../assets/avatar.png";

import { useParams, useLocation } from "react-router-dom";
import { getAdminFromCookie } from "../utils/cookies";

import NotificationsIcon from "@mui/icons-material/Notifications";
import StyledBadge from "../Components/mui/StyledBadge"
import { useDispatch, useSelector } from "react-redux";
import "../style/navbar.css";
import ListDividers from "../Components/mui/ListDividers";
import InsetDividers from "../Components/mui/InsetDividers";
import { clearAllNotification, setRedFlag } from "../redux/slice/notifications-slice";
import NotificationService from "../services/notification.service"


const NavBar = () => {
  const notifications = useSelector((state: any) => state.notification.messages);
  const redFlag = useSelector((state: any) => state.notification.isVisible);

const dispatch=useDispatch()
  const location = useLocation();
  const header = location.pathname.split("/")[1];
  const admin = getAdminFromCookie();
  const [NotificationFlag, setNotificationFlag] = useState(false);
  return (
    <div className="navbar-section">
      {NotificationFlag && (
        <div className="notification">
        <InsetDividers messages={notifications.slice(0,4)}/>
        <button onClick={()=>{
          new NotificationService().deleteAllNotification().then((result)=>{
            dispatch(clearAllNotification())
          })
        }} className="btn  w-100">Delete all notifications</button>

        </div>
      )}
      <div className="nav">
        <div className="page-name">
          {header == "" ? `Welcome ${admin.first_name}` : header}
        </div>
        <ul>
          <li>
            <div
              className={
             
                !redFlag
                  ? "notification-icon open"
                  : "notification-icon"
              }
            >
              <StyledBadge
                onClick={() => {
                  dispatch (setRedFlag(false))
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
              <span className="mx-2">{admin.first_name}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
//
