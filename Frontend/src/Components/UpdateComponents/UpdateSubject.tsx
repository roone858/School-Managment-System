import React, { useEffect, useState } from "react";
import { State, Student, Teacher, Teaching } from "../../types/type";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import studentService from "../../services/student.service";
import { updateClass } from "../../redux/slice/class-slice ";
import Swal from "sweetalert2";
import ClassService from "../../services/class.service";
import SubjectService from "../../services/subject.service";
import { updateSubject } from "../../redux/slice/subject-slice ";
import { Input } from "../Input";
import { getOnlyDate } from "../../utils/time";
import TeachingService from "../../services/teaching.service";
import { addTeaching, updateTeaching } from "../../redux/slice/teaching-slice";
import Loading from "../../layouts/Loading";
const UpdateStudent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const subjects = useSelector((state: any) => state.subjects.data);
  const teachers = useSelector((state: State) => state.teachers.data);
  const teaching = useSelector((state: any) => state.teaching.data);
  const subject = subjects?.find((cla: any) => cla.id == id);
  const teach = teaching?.find((t: Teaching) => t?.subject_id == subject?.id);
  const teacher = teachers?.find(
    (teacher: Teacher) => teacher.id == teach?.teacher_id
  );

  const [data, setData] = useState({ ...subject, ...teach });

  const updateData = (e: any) => {
    setData({ ...subject, ...teach,...data, [e.target.name]: e.target.value });
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
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        const subject = await SubjectService.updateSubject(id, data);
        if (!teach) {
          TeachingService.insertTeaching({
            ...data,
            subject_id: subject.id,
          }).then((result) => {
            dispatch(addTeaching(result));
          });
        } else {
          TeachingService.updateTeaching(subject.id, data).then((result) => {
            dispatch(updateTeaching(result));
          });
        }

        dispatch(updateSubject({ id: id, data: subject }));
        Swal.fire("Updated!", "Subject Updated", "success");
      }
    });
  };

  return (
    <div className="update-form">
      {!subject || !teach || !teacher ? (
        <Loading />
      ) : (
        <>
          <section className="gradient-custom">
            <div className="container py-1 ">
              <div className="row justify-content-center align-items-center ">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration">
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-2 pb-2 pb-md-0 mb-md-5">
                        Update Subject
                      </h3>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="title"
                                className="form-control form-control-lg"
                                name="title"
                                defaultValue={subject.title}
                                onChange={updateData}
                              />
                              <label className="form-label" htmlFor="title">
                                Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="description"
                                defaultValue={subject.description}
                                onChange={updateData}
                                name="description"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="description"
                              >
                                Description
                              </label>
                            </div>
                          </div>
                        </div>
                        <h3>teaching</h3>
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <select
                                id="inputGender4"
                                onChange={updateData}
                                name="teacher_id"
                                defaultValue={
                              teach.teacher_id
                                }
                                className="form-control"
                                required
                              >
                                <option>select teacher</option>
                                {teachers.map((teacher: any) => (
                                  <option
                                    key={teacher.id}
                                    value={teacher.id}
                                  >
                                    {teacher.first_name +
                                      " " +
                                      teacher.last_name}
                                  </option>
                                ))}
                              </select>
                              <label className="form-label" htmlFor="title">
                                Teacher Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="semester"
                                defaultValue={teach ? teach.semester : ""}
                                onChange={updateData}
                                name="semester"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="semester">
                                Semester
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <input
                                type="number"
                                id="grade_level"
                                className="form-control form-control-lg"
                                name="grade_level"
                                defaultValue={teach.grade_level}
                                onChange={updateData}
                              />
                              <label
                                className="form-label"
                                htmlFor="grade_level"
                              >
                                Grade level
                              </label>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <input
                                type="date"
                                id="start_date"
                                defaultValue={
                                  teach ? getOnlyDate(teach.start_date) : ""
                                }
                                onChange={updateData}
                                name="start_date"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="start_date"
                              >
                                Start Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <input
                                type="date"
                                id="end_date"
                                defaultValue={
                                  teach ? getOnlyDate(teach.end_date) : ""
                                }
                                onChange={updateData}
                                name="end_date"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="end_date">
                                End Date
                              </label>
                            </div>
                          </div>
                        </div>{" "}
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
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
