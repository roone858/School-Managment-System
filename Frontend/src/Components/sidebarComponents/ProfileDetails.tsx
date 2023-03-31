import profileImage from "../../assets/profile.jpg";

export default function ProfileDetails() {
  return (
    <>
      <li className="profile">
      <div className="profile-details">
        <img src={profileImage} alt="profileImg" />
        <div className="name_job">
          <div className="name">Mahmoud Gamal</div>
          <div className="job">Administrator</div>
        </div>
      </div>
      <i className="bx bx-log-out" id="log_out"></i>
      </li>
    </>
  );
}
