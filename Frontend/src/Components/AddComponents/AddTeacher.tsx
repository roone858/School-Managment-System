import { useState } from "react";
import { Input } from "../Input";
import TeacherService from "../../services/teacher.service";
import NotificationService from "../../services/notification.service";
import { useDispatch } from "react-redux";

import { addTeacher } from "../../redux/slice/teacher-slice";
import "../../style/addForm.css";
import {
  addNotification,
  setRedFlag,
} from "../../redux/slice/notifications-slice";
import {  Teacher } from "../../types/type";

const AddTeacher = () => {
  const [data, setData] = useState({} as any);
  const dispatch = useDispatch();

  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const insertTeacher = () => {
    TeacherService.insertTeacher(data).then((res: Teacher) => {
      dispatch(addTeacher(res));
      NotificationService.insertNotification({
        message: `new teacher has been added ${res.first_name} ${res.last_name}`,
      }).then((result) => {
        dispatch(addNotification(result));
        dispatch(setRedFlag(true));
      });
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    insertTeacher();

    event.target.reset();
  };

  return (
    <div className="add-form container rounded-2 bg-white mt-4 px-4 py-5">
      <form  onSubmit={handleSubmit}>
        <div className="d-flex justify-content-start flex-wrap gap-2 ">
          <div className={"form-group col-sm-12  col-lg-5  col-xl-3  "}>
            <label htmlFor="first-name">First Name</label>
            <input
              onChange={updateData}
              name="first_name"
              type="text"
              className="form-control"
              id="first-name"
              placeholder="First Name"
              required
            />
          </div>
          <div className={"form-group col-sm-12  col-lg-5  col-xl-3  "}>
            <label htmlFor="last-name">Last Name</label>
            <input
              onChange={updateData}
              name="last_name"
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Last Name"
              required
            />
          </div>
          <div className={"form-group col-sm-12  col-lg-5  col-xl-3  "}>
            <label htmlFor="email">Email</label>
            <input
              onChange={updateData}
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className={"form-group col-sm-12  col-lg-5  col-xl-3  "}>
            <label htmlFor="phone">Phone</label>
            <input
              onChange={updateData}
              name="phone"
              type="phone"
              className="form-control"
              id="phone"
              placeholder="phone"
              required
            />
          </div>
          <div className={"form-group col-sm-12  col-lg-5  col-xl-3  "}>
            <label htmlFor="dob">DOB</label>
            <input
              onChange={updateData}
              name="dob"
              type="date"
              className="form-control"
              id="dob"
              required
            />
          </div>
          <div className="form-group col-sm-12  col-lg-5  col-xl-3   ">
            <label htmlFor="inputGender4">Gender</label>
            <br />
            <select
              id="inputGender4"
              onChange={updateData}
              name="gender"
              className="form-control"
              required
            >
              <option>Select Gender </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
         
          <div className={"form-group col-sm-12  col-lg-5  col-xl-3  "}>
            <label htmlFor="address">Address</label>
            <input
              onChange={updateData}
              name="address"
              type="address"
              className="form-control"
              id="address"
              placeholder=" 25 STR- Manflout - Assiut"
              required
            />
          </div>
          <div className="form-group col-sm-12 mt-4 col-lg-5  col-xl-3 ">
        

          <button type="submit" className="btn btn-primary form-control">
            Create
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
