import React, { useEffect, useState } from "react";
import { Student } from "../../types/type";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TeacherService from "../../services/teacher.service";
import { updateTeacher } from "../../redux/slice/teacher-slice";
import Swal from "sweetalert2";
const UpdateTeacher = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const teachers = useSelector((state: any) => state.teachers);
  const teacher = teachers?.find((teacher: any) => teacher.id == id);
  const [data, setData] = useState(teacher);

  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure to update?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await TeacherService.updateTeacher(id, data);
        if (res.message)
          Swal.fire("Can't Update!", "Internal Server Error", "error");
        else {
          dispatch(updateTeacher({ id: id, data: data }));
          Swal.fire("Updated!", "teacher Updated", "success");
        }
      }
    });
  };

  if (!data) return <h1>loading</h1>;
  return (
    <div className="update-form">
      {!teacher ? (
        <h1>loading</h1>
      ) : (
        <>
          <section className=" gradient-custom">
            <div className="container py-2 ">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration">
                    <div className="card-body p-2 p-md-5">
                      <h3 className="mb-2 pb-2 pb-md-0 mb-md-5">
                        Update Teacher
                      </h3>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="first_name"
                                className="form-control form-control-lg"
                                name="first_name"
                                value={data.first_name}
                                onChange={updateData}
                              />
                              <label
                                className="form-label"
                                htmlFor="first_name"
                              >
                                First Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="last_name"
                                value={data.last_name}
                                onChange={updateData}
                                name="last_name"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="last_name">
                                Last Name
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-2 d-flex align-items-center">
                            <div className="form-outline datepicker w-100">
                              <input
                                type="date"
                                className="form-control form-control-lg"
                                id="birthdayDate"
                                name="dob"
                                onChange={updateData}
                              />
                              <label
                                htmlFor="birthdayDate"
                                className="form-label"
                              >
                                Birthday
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2 pb-2">
                            <div className="form-outline">
                              <select
                                id="inputGender4"
                                onChange={updateData}
                                name="gender"
                                value={data.gender}
                                className="form-control"
                                required
                              >
                                <option>Select Gender </option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                              </select>
                              <label
                                htmlFor="birthdayDate"
                                className="form-label"
                              >
                                Gender
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-2 pb-2">
                            <div className="form-outline">
                              <input
                                type="email"
                                id="emailAddress"
                                className="form-control form-control-lg"
                                name="email"
                                value={data.email}
                                onChange={updateData}
                              />
                              <label
                                className="form-label"
                                htmlFor="emailAddress"
                              >
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2 pb-2">
                            <div className="form-outline">
                              <input
                                type="tel"
                                id="phon"
                                className="form-control form-control-lg"
                                name="phone"
                                value={data.phone}
                                onChange={updateData}
                              />
                              <label
                                className="form-label"
                                htmlFor="phoneNumber"
                              >
                                Phone Number
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-6">
                            <div className="form-outline">
                              <input
                                type="address"
                                id="address"
                                className="form-control form-control-lg"
                                name="address"
                                value={data.address}
                                onChange={updateData}
                              />
                              <label
                                className="form-label"
                                htmlFor="phoneNumber"
                              >
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
        </>
      )}
    </div>
  );
};

export default UpdateTeacher;