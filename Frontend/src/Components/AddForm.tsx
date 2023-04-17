import { useState } from "react";
import { Input } from "./Input";
import StudentService from "../services/student.service";
import TeacherService from "../services/teacher.service";
import NotificationService from "../services/notification.service";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/slice/student-slice";
import { addTeacher } from "../redux/slice/teacher-slice";
import "../style/addForm.css";
import {
  addNotification,
  setRedFlag,
} from "../redux/slice/notifications-slice";
const AddData = (props: any) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const insertStudent = () => {
    const db = new StudentService();
    db.insertStudent(data).then((res) => {
      res.message && alert(res.message);
      dispatch(addStudent(res));

      new NotificationService()
        .insertNotification({
          message: `new Student added ${res.firstname} ${res.lastname}`,
        })
        .then((result) => {
          dispatch(addNotification(result));
          dispatch(setRedFlag(true));
        });
    });
  };

  const insertTeacher = () => {
    const db = new TeacherService();
    db.insertTeacher(data).then((res) => {
      res.message && alert(res.message);
      dispatch(addTeacher(res));

      new NotificationService()
        .insertNotification({
          message: `new Teacher added ${res.firstname} ${res.lastname}`,
        })
        .then((result) => {
          dispatch(addNotification(result));
          dispatch(setRedFlag(true));
        });
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (props.entity == "student") insertStudent();

    if (props.entity == "teacher") insertTeacher();

    event.target.reset();
  };

  return (
    <div className="add-form">
      <h1>Add new {props.entity}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row d-flex gap-2 ">
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
        <div className="form-row d-flex gap-2">
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
        <div className="form-row d-flex gap-2">
          <Input
            name="phone"
            onChange={updateData}
            text="Phone"
            type="text"
            id="inputPhone"
            placeholder="Phone"
          />

          <div className="form-row col-6 ">
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
    </div>
  );
};

export default AddData;
