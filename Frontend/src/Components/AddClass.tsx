import React, { useState } from "react";
import { Input } from "./Input";
import ClassService from "../services/class.service";
import { useDispatch } from "react-redux";
import { addClass } from "../redux/slice/class-slice ";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({} as any);
const navigate= useNavigate()
  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    ClassService.insertClass(data).then(result=>{
     dispatch(addClass(result))
     navigate("/classes")
    })
  
  };
  return (
    <div className="add-form">
      <h1>Add new Class</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row d-flex gap-2 ">
          <Input
            name="name"
            onChange={updateData}
            text="Name"
            placeholder="Name"
            type="text"
            id="inputName4"
          />
          <Input
            name="grade_level"
            onChange={updateData}
            text="Grade Level"
            placeholder="Grade Level"
            type="number"
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

export default AddClass;
