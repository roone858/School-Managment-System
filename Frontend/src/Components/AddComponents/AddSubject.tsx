import React, { useState } from "react";
import { Input } from "../Input";
import { Subject, State, Teacher } from "../../types/type";
import { useDispatch, useSelector } from "react-redux";
import TeachingService from "../../services/teaching.service";
import SubjectService from "../../services/subject.service";
import { addSubject } from "../../redux/slice/subject-slice ";
import { addTeaching } from "../../redux/slice/teaching-slice";

export const AddSubject = () => {
  const teachers = useSelector((state: State) => state.teachers);
  const [data, setData] = useState({} as Subject);
  const dispatch= useDispatch()
  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(event: any) => {
    event.preventDefault();
    console.log(data);
   const subject:Subject = await SubjectService.insertSubject(data)
    await TeachingService.insertTeaching({...data,subject_id:subject.id}).then(result=>{
      dispatch(addSubject(subject))
      dispatch(addTeaching(result))
    })


  };
  return (
    <div className="add-form">
      <h1>Add new Subject</h1>
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
              {teachers.map((teacher: any) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.first_name+" "+teacher.last_name}
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
            name="grade_level"
            onChange={updateData}
            text="Grade Level"
            type="text"
            id="GradeLevel"
            placeholder="Grade Level"
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
