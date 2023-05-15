import React, { useEffect, useState } from "react";
import { State, Student } from "../../types/type";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import studentService from "../../services/student.service";
import { updateStudent } from "../../redux/slice/student-slice";
import Swal from "sweetalert2";
import Loading from "../../layouts/Loading";
const UpdateStudent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const students = useSelector((state: State) => state.students.data);
  const classes = useSelector((state: State) => state.classes.data);
  const student: Student | any = students?.find(
    (student: Student) => student.id === Number(id)
  );
  const [data, setData] = useState(student);

  const updateData = (e: any) => {
    setData({ ...student,...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(data);
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
        const res = await studentService.updateStudent(id, data);
        if (res.message)
          Swal.fire("Can't Update!", "Internal Server Error", "error");
        else {
          dispatch(updateStudent({ id: id, data: data }));
          Swal.fire("Updated!", "student Updated", "success");
        }
      }
    });
  };

  return (
    <div className="update-form">
      {!student ? (
        <Loading />
      ) : (
        <>
          <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration">
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                        Update Student
                      </h3>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="first_name"
                                className="form-control form-control-lg"
                                name="first_name"
                                defaultValue={student.first_name}
                                onChange={updateData}
                                autoComplete="on"
                              />
                              <label
                                className="form-label"
                                htmlFor="first_name"
                              >
                                First Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="last_name"
                                defaultValue={student.last_name}
                                onChange={updateData}
                                name="last_name"
                                autoComplete="on"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="last_name">
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
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <select
                                id="inputGender4"
                                onChange={updateData}
                                name="gender"
                                defaultValue={student.gender}
                                className="form-control"
                                required
                              >
                                <option>Select Gender </option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                              </select>
                              <label
                                htmlFor="inputGender4"
                                className="form-label"
                              >
                                Gender
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
                                defaultValue={student.email}
                                autoComplete="on"
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
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="tel"
                                id="phone"
                                className="form-control form-control-lg"
                                name="phone"
                                defaultValue={student.phone}
                                autoComplete="on"
                                onChange={updateData}
                              />
                              <label
                                className="form-label"
                                htmlFor="phone"
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
                                defaultValue={student.address}
                                autoComplete="on"
                                onChange={updateData}
                              />
                              <label
                                className="form-label"
                                htmlFor="address"
                              >
                                Address
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <select
                                id="class"
                                onChange={updateData}
                                name="class_id"
                                defaultValue={student.class_id}
                                className="form-control"
                                required
                              >
                                <option>Class </option>
                                <option value="M">Select Class</option>
                                {classes.map((c: any) => (
                                  <option value={c.id} key={c.id}>
                                    {c.name}
                                  </option>
                                ))}
                              </select>
                              <label
                                htmlFor="class"
                                className="form-label"
                              >
                                Class
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

export default UpdateStudent;
