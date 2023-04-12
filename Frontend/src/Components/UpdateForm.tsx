import React, { useEffect, useState } from "react";
import { Student } from "../types/type";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const UpdateForm = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    gender: "",
  });
  const student = useSelector((state: any) =>
    state.students.find((student: any) => student.id == id)
  );

  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const  handleSubmit = (e: any) => {
     e.preventDefault();
     console.log(data)
   }
  useEffect(() => {
    if (student) setData(student);
  }, []);
  return (
    <div className="update-form">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Form</h3>
                  <form
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstname"
                            className="form-control form-control-lg"
                            name="firstname"
                            value={data?.firstname}
                            onChange={updateData}
                          />
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastname"
                            value={data?.lastname}
                            onChange={updateData}
                            name="lastname"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            id="birthdayDate"
                            name="dateofbirth"
                            onChange={updateData}
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Birthday
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          {data.gender == "Female" ? (
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="femaleGender"
                              value="Female"
                              checked
                            />
                          ) : (
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="femaleGender"
                              value="Female"
                              onClick={updateData}
                            />
                          )}
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          {data.gender == "Male" ? (
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="maleGender"
                              value="Male"
                              checked
                            />
                          ) : (
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="maleGender"
                              value="Male"
                              onClick={updateData}
                            />
                          )}
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            name="email"
                            value={data?.email}
                            onChange={updateData}
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phon"
                            className="form-control form-control-lg"
                            name="phone"
                            value={data?.phone}
                            onChange={updateData}
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="form-outline">
                          <input
                            type="address"
                            id="address"
                            className="form-control form-control-lg"
                            name="address"
                            value={data?.address}
                            onChange={updateData}
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Address
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateForm;
