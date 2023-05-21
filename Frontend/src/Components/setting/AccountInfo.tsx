import { useState, useEffect } from 'react';
import AdminService from '../../services/admin.service';
import { getAdminFromCookie } from '../../utils/cookies';
import { Admin } from '../../types/type';
const AccountInfo = () => {
  const [admin, setAdmin] = useState({} as Admin);
  const { username } = getAdminFromCookie();
  useEffect(() => {
    new AdminService().getAdminByUsername(username).then((result) => {
      setAdmin(result);
    });
  }, []);

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
            <span>{admin.first_name}</span>
          </li>
          <li className="list-group-item">
            <span>Last Name :</span>
            <span>{admin.last_name}</span>
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
