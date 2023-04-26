import React, { useState } from "react";
import { Input } from "../Input";
import ClassService from "../../services/class.service";
import { useDispatch, useSelector } from "react-redux";
import { addClass } from "../../redux/slice/class-slice ";
import { useNavigate } from "react-router-dom";
import { days } from "../../utils/time";
import SessionService from "../../services/session.service";
import { addSession } from "../../redux/slice/session-slice ";

const AddSession = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({} as any);
  const navigate = useNavigate();
  const teachers = useSelector((state: any) => state.teachers);
  const classes = useSelector((state: any) => state.classes);
  const subjects = useSelector((state: any) => state.subjects);
  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    SessionService.insertSession(data).then((result) => {
      dispatch(addSession(result));
    });
  };
  return (
    <div className="add-form">
      <h1>Add new Session</h1>
      <form className="form-row d-flex gap-2 " onSubmit={handleSubmit}>
        <div className="form-row d-flex gap-2 ">
          <div className="form-row col-6 ">
            <label htmlFor="inputTeacher">Teacher</label>
            <br />
            <select
              id="inputTeacher"
              onChange={updateData}
              name="teacher_id"
              className="form-control"
              required
            >
              <option>Select Teacher </option>
              {teachers.map((teacher: any) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.first_name + " " + teacher.last_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row col-6 ">
            <label htmlFor="inputClass">Class</label>
            <br />
            <select
              id="inputClass"
              onChange={updateData}
              name="class_id"
              className="form-control"
              required
            >
              <option>Select Class </option>
              {classes.map((cla: any) => (
                <option key={cla.id} value={cla.id}>
                  {cla.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row d-flex gap-2 ">
          <div className="form-row col-6 ">
            <label htmlFor="inputSubject">Subject</label>
            <br />
            <select
              id="inputSubject"
              onChange={updateData}
              name="subject_id"
              className="form-control"
              required
            >
              <option>Select Subject </option>
              {subjects.map((subject: any) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row col-6 ">
            <label htmlFor="inputDay">Day</label>
            <br />
            <select
              id="inputDay"
              onChange={updateData}
              name="day"
              className="form-control"
              required
            >
              <option>Select Day </option>
              {days.map((day: any) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row d-flex gap-2 ">
          <Input
            name="start_time"
            onChange={updateData}
            text="Start Time"
            placeholder="Name"
            type="time"
            id="inputName4"
          />
          <Input
            name="end_time"
            onChange={updateData}
            text="End Time"
            placeholder="Grade Level"
            type="time"
            id="inputGrade_level"
          />
        </div>

        <div className="form-group"></div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddSession;
