import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import StudentService from "../services/student.service";
import TeacherService from "../services/teacher.service";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../features/slice/student-slice";
import { addTeacher } from "../features/slice/teacher-slice";
const AddData = (props: any) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (props.entity == "student")
      new StudentService()
        .insertStudent(data)
        .then((data) => {
          dispatch(addStudent(data));
        })
        .catch((err) => console.log(err));
    if (props.entity == "teacher")
      new TeacherService().insertTeacher(data).then((data) => {
        dispatch(addTeacher(data));
      });

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <Input
            name="firstName"
            onChange={updateData}
            text="First Name"
            placeholder="First Name"
            type="text"
            id="inputFirstname4"
          />
          <Input
            name="lastName"
            onChange={updateData}
            text="Last Name"
            placeholder="Last Name"
            type="text"
            id="inputLastname4"
          />
        </div>
        <div className="form-row">
          <Input
            name="email"
            onChange={updateData}
            text="Email"
            placeholder="Email"
            type="email"
            id="inputEmail4"
          />
          <Input
            name="dateOfBirth"
            onChange={updateData}
            text="Date of Birth"
            type="date"
            id="inputBirth4"
          />
        </div>
        <div className="form-row">
          <Input
            name="phone"
            onChange={updateData}
            text="Phone"
            type="text"
            id="inputPhone"
            placeholder="Phone"
          />

          <div className="form-group col-md-6">
            <label htmlFor="inputGender4">Gender</label>
            <br />
            <select
              id="inputGender4"
              onChange={updateData}
              name="gender"
              className="form-control"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <Input
          name="address"
          onChange={updateData}
          text="Address"
          type="text"
          id="inputAddress"
          placeholder="1234 Main St"
        />

        <div className="form-group"></div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
};

export default AddData;
