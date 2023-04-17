import { useState,useEffect } from "react";
import AdminService from "../../services/admin.service";

const AccountInfo = () => {
  const [admin, setAdmin] = useState({});
useEffect(()=>{
  new AdminService().getAdminByUsername("hassan").then((result) => {
    setAdmin(result);
  });
},[])

  return (
    <div>
      <div className="card">
        <ul className="about-content list-group list-group-flush">
          <li className="list-group-item">
            <span>Username :</span>
            <span>{admin.username}</span>
          </li>
          <li className="list-group-item">
            <span>First Name :</span>
            <span>{admin.firstname}</span>
          </li>
          <li className="list-group-item">
            <span>Last Name :</span>
            <span>{admin.lastname}</span>
          </li>
          <li className="list-group-item">
            <span>Email :</span>
            <span>{admin.email}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountInfo;
