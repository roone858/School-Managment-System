import React, { useEffect, useState } from "react";

const Add = () => {
  const [student, setStudent] = useState({});
  const updateStudent = (e: any) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event: any) => {
  event.preventDefault()
    fetch("http://localhost:4000/api/student/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputFirstname4">First Name</label>
            <input
              onChange={updateStudent}
              name="firstName"
              type="text"
              className="form-control"
              id="inputFirstname4"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastname4">Last Name</label>
            <input
              onChange={updateStudent}
              name="lastName"
              type="text"
              className="form-control"
              id="inputLastname4"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              onChange={updateStudent}
              name="email"
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputBirth4">Date of Birth</label>
            <input
              id="inputBirth4"
              onChange={updateStudent}
              name="dateOfBirth"
              type="date"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPhone">Phone</label>
            <input
              onChange={updateStudent}
              name="phone"
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Phone"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputGender4">Gender</label>
            <br />
            <select
              id="inputGender4"
              onChange={updateStudent}
              name="gender"
              className="form-control"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            onChange={updateStudent}
            name="address"
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group"></div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
};

export default Add;
