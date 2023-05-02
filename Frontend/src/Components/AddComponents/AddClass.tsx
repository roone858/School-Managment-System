import React, { useState } from "react";
import ClassService from "../../services/class.service";
import { useDispatch } from "react-redux";
import { addClass } from "../../redux/slice/class-slice ";
import { useNavigate } from "react-router-dom";
import { ClassType } from "../../types/type";

const AddClass = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({} as ClassType);
  const navigate = useNavigate();
  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    ClassService.insertClass(data).then((result) => {
      dispatch(addClass(result));
      navigate("/classes");
    });
  };
  return (
    <div className="add-form  rounded-2 bg-white mt-4  py-3">
      <form onSubmit={handleSubmit}>
        <div className="form-row  d-flex flex-column  flex-lg-row flex-wrap  p-4  bg-white   rounded-3">
          <div className={"form-group col-12  col-lg-5  col-xl-3 mx-lg-3  "}>
            <label htmlFor="last-name">Name :</label>
            <input
              onChange={updateData}
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Name "
              required
            />
          </div>
          <div className={"form-group col-12  col-lg-5  col-xl-3 mx-lg-3  "}>
            <label htmlFor="email">Grade Level :</label>
            <input
              onChange={updateData}
              name="grade_level"
              type="number"
              className="form-control"
              id="grade_level"
              placeholder="Grade Level"
              required
            />
          </div>
          <button
            type="submit"
            className="  col-12  col-lg-5  col-xl-3 mx-lg-3  btn btn-primary mt-4"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
