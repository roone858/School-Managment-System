import React, { useState } from "react";
import "../../style/changepass.css";
import { getAdminFromCookie } from "../../utils/cookies";
import AdminService from "../../services/admin.service";
import Swal from "sweetalert2";
const ChangePass = () => {
  const [data, setData] = useState({} as any);
  const [hideCurrent, setHideCurrent] = useState(true);
  const [hideNew, setHideNew] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);
  const handleHideCurrent = () => {
    setHideCurrent(!hideCurrent);
  };
  const handleHideNew = () => {
    setHideNew(!hideNew);
  };
  const handleHideConfirm = () => {
    setHideConfirm(!hideConfirm);
  };
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (data.newPassword !== data.confirmPassword)
      return console.log("not confirm");
    const { username } = getAdminFromCookie();

    Swal.fire({
      title: "Are you sure Change Your Password ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        new AdminService()
          .changeAdminPassword({ ...data, username })
          .then((result: any) => {
            if (result.message)
              return Swal.fire(
                "Sorry!",
                "Current Password is not valid ",
                "error"
              );
            Swal.fire("Changed!", "Password is changed ", "success");
          });
      }
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-8">
            <label>Current Password</label>
            <div className="form-group pass_show">
              <input
                type={hideCurrent ? "password" : "text"}
                className="form-control"
                placeholder="Current Password"
                name="oldPassword"
                required
                onChange={handleChange}
              />
              <span onClick={handleHideCurrent} className="show-btn">
                Show
              </span>
            </div>
            <label>New Password</label>
            <div className="form-group pass_show">
              <input
                type={hideNew ? "password" : "text"}
                className="form-control"
                placeholder="New Password"
                name="newPassword"
                required
                onChange={handleChange}
              />
              <span onClick={handleHideNew} className="show-btn">
                Show
              </span>
            </div>
            <label>Confirm Password</label>
            <div className="form-group pass_show">
              <input
                type={hideConfirm ? "password" : "text"}
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                required
                onChange={handleChange}
              />
              <span onClick={handleHideConfirm} className="show-btn">
                Show
              </span>
            </div>
            <button className="my-3 btn btn-primary" type="submit">
              Change
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePass;
