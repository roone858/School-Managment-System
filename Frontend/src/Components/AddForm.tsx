import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import StudentService from "../store/services/student.service";
import { useDispatch,useSelector } from "react-redux";
import { addStudent } from "../store/actions/studentActions";
const AddData = (props: any) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch()

  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/api/${props.entity}/`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addStudent(data)))
      .catch((err) => console.log(err));
    
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
