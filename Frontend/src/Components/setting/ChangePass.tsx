import React, { useState } from "react";
import "../../style/changepass.css";
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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (data.newPassword !==data.confirmPassword ) return console.log("not confirm")
    console.log(data);
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
                name="currentPassword"
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
