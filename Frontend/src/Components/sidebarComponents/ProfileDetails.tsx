import profileImage from '../../assets/avatar.png';
import {
  getAdminFromCookie,
  removeTokenCookie,
  removeAdminCookie,
} from '../../utils/cookies';

export default function ProfileDetails() {
  const admin = getAdminFromCookie();
  return (
    <>
      <li className="profile">
        <div className="profile-details">
          <img src={profileImage} alt="profileImg" />
          <div className="name_job">
            <div className="name">
              {admin.first_name + ' ' + admin.last_name}{' '}
            </div>
            <div className="job">Administrator</div>
          </div>
        </div>
        <i
          onClick={() => {
            removeTokenCookie();
            removeAdminCookie();
            window.location.href = '/';
          }}
          className="bx bx-log-out"
          id="log_out"
        ></i>
      </li>
    </>
  );
}
