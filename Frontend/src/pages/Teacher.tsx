import { AddButton } from "../layouts/AddButton";
import { Table } from "../Components/Table";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { State, Teacher } from "../types/type";
import Swal from "sweetalert2";
import TeacherService from "../services/teacher.service";
import { deleteTeacher } from "../redux/slice/teacher-slice";
import TeachingService from "../services/teaching.service";
import { Input } from "../Components/Input";
import teacherAvatar from "../assets/teacherAvatar.jpg";
import { useState } from "react";
import AddTeacher from "../Components/AddComponents/AddTeacher";

export const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state: State) => state.teachers);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await TeachingService.deleteTeaching(id)
        const response = await TeacherService.deleteTeacher(id);
        dispatch(deleteTeacher(id));
        Swal.fire(" Deleted!", "Teacher deleted", "success");
      }
    });
  };
  const teachersRaws = teachers.map((teacher: Teacher) => (
    <tr className="bg-fff" key={teacher.id.toString()}>
      <th scope="row">{teacher.id.toString()}</th>
      <td><img src={teacherAvatar}  style={{  height: "40px" ,borderRadius:"100%"}} alt="" /></td>
      <td>{teacher.first_name+" "+teacher.last_name}</td>
      <td>{teacher.dob.slice(0,10)}</td>
      <td>{teacher.address}</td>

      <td>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={`/teachers/` + teacher.id}
          type="button"
          className="btn btn-primary btn-sm "
        >
          Details
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={`/teachers/` + "update/" + teacher.id}
          type="button"
          className="btn btn-success btn-sm mx-2 "
        >
          Update
        </Link>
        <button
          onClick={() => handleDelete(teacher.id)}
          type="button"
          className="btn  btn-danger btn-sm "
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <><div className="teachers-sections container">
      
       <button    onClick={() => {
            setIsAddOpen(!isAddOpen);
          }} className="btn btn-primary " >
          Add new Teacher
        </button>
       {isAddOpen && <AddTeacher/>}
        <form className=" d-flex ">
          <div className="form-row d-flex mt-4  col-12 ">

          {/* <div className={" col-sm-12  col-lg-5  col-xl-3 mx-lg-3  "}> */}
         
            <input
              className="form-control p-3  "
              name="end_time"
              onChange={()=>{}}
              placeholder="Search By ID..."
              type="search"
              id="inputGrade_level"
              required
            />
          {/* </div> */}
          
          {/* <div className={" col-sm-12  col-lg-5  col-xl-3 mx-lg-3  "}> */}
         
            <input
              className="form-control p-3 mx-3"
              name="end_time"
              onChange={()=>{}}
              placeholder="Search By Name..."
              type="search"
              id="inputGrade_level"
              required
            />
          {/* </div> */}
           
            <div className="form-group  col-5">
              <label></label>
              {/* <select
                className="form-control"
                name="class_id"
                onChange={(e: any) => {
                   setClassId(e.target.value);
                }}
              >
                <option value={undefined}>Search By Class</option>
                {classes.map((cla: any) => (
                  <option key={cla.id} value={cla.id}>
                    {cla.name}
                  </option>
                ))}
              </select> */}
            </div>
          </div>
        </form>
        <div className="students">
          <Table
            columns={[
              "ID ",
              "Photo",
              "Name",
              "DOP",
              "Address",
              "Actions",
            ]}
            rows={teachersRaws}
          />
        </div>
    </div>
    </>
  );
};
