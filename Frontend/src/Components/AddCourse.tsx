import React, { useState } from "react";
import { Input } from "./Input";
import { Course, State, Teacher } from "../types/type";
import { useSelector } from "react-redux";
import TeachingService from "../services/teaching.service";
import CourseService from "../services/course.service";

export const AddCourse = () => {
  const teachers = useSelector((state: State) => state.teachers);
  const [data, setData] = useState({} as Course);
  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(event: any) => {
    
    event.preventDefault();
    console.log(data);
   const course:Course = await CourseService.insertCourse(data)
  await TeachingService.insertTeaching({...data,course_id:course.id})
  };
  return (
    <div className="add-form">
      <h1>Add new Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row d-flex gap-2 ">
          <Input
            name="title"
            onChange={updateData}
            text="Title"
            placeholder="Title"
            type="text"
            id="inputTitle4"
          />
          <Input
            name="description"
            onChange={updateData}
            text="Description"
            placeholder="Description"
            type="text"
            id="inputDescription"
          />
        </div>
        <div className="form-row d-flex gap-2">
          <Input
            name="department"
            onChange={updateData}
            text="Department"
            placeholder="Department"
            type="text"
            id="inputDepartment"
          />
          <div className="form-row col-6 ">
            <label htmlFor="inputTeacher">Teacher Name :</label>
            <br />
            <select
              id="inputTeacher"
              onChange={updateData}
              name="teacher_id"
              className="form-control"
              required
            >
              <option>Select Teacher </option>
              {teachers.map((teacher: Teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.first_name + " " + teacher.last_name}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row d-flex gap-2">
          <Input
            name="semester"
            onChange={updateData}
            text="Semester"
            type="text"
            id="inputSemester"
            placeholder="Semester"
          />
          <Input
            name="section"
            onChange={updateData}
            text="Section"
            type="text"
            id="inputSection"
            placeholder="Section"
          />
        </div>
        <div className="form-row d-flex gap-2">
          <Input
            name="start_date"
            onChange={updateData}
            text="Start Date"
            type="date"
            id="inputStart_date"
            placeholder="Start Date"
          />
          <Input
            name="end_date"
            onChange={updateData}
            text="End Date"
            type="date"
            id="inputEnd_date"
            placeholder="End Date"
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
