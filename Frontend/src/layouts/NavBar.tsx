import { useState } from 'react';
import profileImage from '../assets/avatar.png';

import { useLocation } from 'react-router-dom';
import { getAdminFromCookie } from '../utils/cookies';

import NotificationsIcon from '@mui/icons-material/Notifications';
import StyledBadge from '../Components/mui/StyledBadge';
import { useDispatch, useSelector } from 'react-redux';
import '../style/navbar.css';
import InsetDividers from '../Components/mui/InsetDividers';
import {
  clearAllNotification,
  setRedFlag,
} from '../redux/slice/notifications-slice';
import NotificationService from '../services/notification.service';

const NavBar = () => {
  const notifications = useSelector(
    (state: any) => state.notification.messages,
  );
  const redFlag = useSelector((state: any) => state.notification.isVisible);

  const dispatch = useDispatch();
  const location = useLocation();
  const header = location.pathname.split('/')[1];
  const admin = getAdminFromCookie();
  const [NotificationFlag, setNotificationFlag] = useState(false);
  return (
    <div className="navbar-section">
      {NotificationFlag && (
        <div className="notification">
          <div
            className="head m-1 p-2"
            style={{ alignItems: 'center', borderBottom: '1px solid #ddd' }}
          >
            <h5 style={{ alignItems: 'center', textAlign: 'center' }}>
              Notifications
            </h5>
          </div>
          <InsetDividers
            messages={notifications.slice(0, 4)}
            style={{ alignItems: 'center', textAlign: 'center' }}
          />
          <button
            onClick={() => {
              NotificationService.deleteAllNotification().then(() => {
                dispatch(clearAllNotification());
              });
            }}
            className="btn btn-primary  w-100"
          >
            Delete all notifications
          </button>
        </div>
      )}
      <div className="nav">
        <div className="page-name">
          {header == '' ? `Welcome ${admin.first_name}` : header}
        </div>
        <ul>
          <li>
            <div
              className={
                !redFlag ? 'notification-icon open' : 'notification-icon'
              }
            >
              <StyledBadge
                onClick={() => {
                  dispatch(setRedFlag(false));
                  NotificationFlag
                    ? setNotificationFlag(false)
                    : setNotificationFlag(true);
                }}
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                variant={!redFlag ? 'standard' : 'dot'}
              >
                <NotificationsIcon style={{ marginRight: '1rem' }} />
              </StyledBadge>
            </div>
          </li>
          <li>
            <div className="navbar-profile ">
              <img src={profileImage} alt="..." />
              <div className="d-flex flex-column ">
                <span style={{ fontSize: '14px' }} className="mx-2  ">
                  {admin.first_name + ' ' + admin.last_name}
                </span>
                <span style={{ fontSize: '12px' }} className="mx-2 ">
                  Admin
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
//
