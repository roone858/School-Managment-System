import { useState } from "react";
import { Input } from "../Input";
import StudentService from "../../services/student.service";
import TeacherService from "../../services/teacher.service";
import NotificationService from "../../services/notification.service";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../redux/slice/student-slice";
import { addTeacher } from "../../redux/slice/teacher-slice";
import "../../style/addForm.css";
import {
  addNotification,
  setRedFlag,
} from "../../redux/slice/notifications-slice";
import { Student, Teacher } from "../../types/type";

const AddStudent = (props: any) => {
  const [data, setData] = useState({} as any);
  const dispatch = useDispatch();
  const classes = useSelector((state: any) => state.classes);

  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const insertStudent = () => {
    StudentService.insertStudent(data).then((res: Student) => {
      dispatch(addStudent(res));

      NotificationService.insertNotification({
        message: `new Student added ${res.first_name} `,
      }).then((result) => {
        dispatch(addNotification(result));
        dispatch(setRedFlag(true));
      });
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    insertStudent();

    event.target.reset();
  };

  return (
    <div className="add-form">
      <h1>Add new Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row d-flex gap-2 ">
          <Input
            name="first_name"
            onChange={updateData}
            text="First Name"
            placeholder="First Name"
            type="text"
            id="inputfirst_name4"
          />
          <Input
            name="last_name"
            onChange={updateData}
            text="Last Name"
            placeholder="Last Name"
            type="text"
            id="inputlast_name4"
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
            name="dob"
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
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
        </div>
        <div className="form-row d-flex gap-2">
          <Input
            name="address"
            onChange={updateData}
            text="Address"
            type="text"
            id="inputAddress"
            placeholder="1234 Main St"
          />
          <div className="form-row col-6 ">
            <label htmlFor="inputGender4">Class</label>
            <br />
            <select
              id="inputClassName"
              onChange={updateData}
              name="class_id"
              className="form-control"
              required
            >
              <option>Select Class </option>
              {classes.map((c: any) => (
                <option key={c.id} value={c.id}>
                  {c.name}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group"></div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
