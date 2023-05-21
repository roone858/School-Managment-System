import { Table } from '../Components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types/type';
import Swal from 'sweetalert2';
import TeacherService from '../services/teacher.service';
import { deleteTeacher } from '../redux/slice/teacher-slice';
import TeachingService from '../services/teaching.service';
import teacherAvatar from '../assets/teacherAvatar.jpg';
import { useState } from 'react';
import AddTeacher from '../Components/AddComponents/AddTeacher';
import GetTeacherByID from '../Components/GetComponents/GetTeacherByID';
import GetTeacherByName from '../Components/GetComponents/GetTeacherByName';
import GetAllTeachers from '../Components/GetComponents/GetAllTeachers';
import Loading from '../layouts/Loading';

export const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state: State) => state.teachers.data);
  const isTeachersLoading = useSelector(
    (state: State) => state.teachers.isLoading,
  );
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [teacherId, setTeacherId] = useState();
  const [teacherName, setTeacherName] = useState();
  const handleDelete = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete !',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await TeachingService.deleteTeachingByTeacherID(id);
        await TeacherService.deleteTeacher(id);
        dispatch(deleteTeacher(id));
        Swal.fire(' Deleted!', 'Teacher deleted', 'success');
      }
    });
  };
  if (isTeachersLoading) return <Loading />;
  return (
    <>
      <div className="teachers-sections container">
        <button
          onClick={() => {
            setIsAddOpen(!isAddOpen);
          }}
          className="btn btn-primary "
        >
          Add new Teacher
        </button>
        {isAddOpen && <AddTeacher />}
        <form className=" d-flex ">
          <div className="form-row d-flex mt-4  col-12 ">
            {/* <div className={" col-sm-12  col-lg-5  col-xl-3 mx-lg-3  "}> */}

            <input
              className="form-control p-3  "
              name="end_time"
              onChange={(e: any) => {
                setTeacherId(e.target.value);
              }}
              placeholder="Search By ID..."
              type="search"
              id="inputID"
              autoComplete="on"
              required
            />
            {/* </div> */}

            {/* <div className={" col-sm-12  col-lg-5  col-xl-3 mx-lg-3  "}> */}

            <input
              className="form-control p-3 mx-3"
              name="end_time"
              onChange={(e: any) => {
                setTeacherName(e.target.value);
              }}
              placeholder="Search By Name..."
              autoComplete="on"
              type="search"
              id="inputName"
              required
            />
            {/* </div> */}

            <div className="form-group  col-5">
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
            columns={['ID ', 'Photo', 'Name', 'DOP', 'Address', 'Actions']}
            rows={
              teacherId || teacherName ? (
                <>
                  {teacherId && (
                    <GetTeacherByID
                      teachers={teachers}
                      teacherId={teacherId}
                      handleDelete={handleDelete}
                      teacherAvatar={teacherAvatar}
                    />
                  )}
                  {teacherName && (
                    <GetTeacherByName
                      teachers={teachers}
                      teacherName={teacherName}
                      teacherAvatar={teacherAvatar}
                    />
                  )}
                </>
              ) : (
                <GetAllTeachers
                  teachers={teachers}
                  handleDelete={handleDelete}
                  teacherAvatar={teacherAvatar}
                />
              )
            }
          />
        </div>
      </div>
    </>
  );
};
