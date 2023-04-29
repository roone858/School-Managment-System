import { useSelector, useDispatch } from "react-redux";

import { Link, Outlet, useNavigate } from "react-router-dom";
import IconTabs from "../Components/mui/IconTabs";
import Swal from "sweetalert2";
import SubjectService from "../services/subject.service";
import { deleteSubject } from "../redux/slice/subject-slice ";
import SessionService from "../services/session.service";
import { deleteSession } from "../redux/slice/session-slice ";
import { AddSubject } from "../Components/AddComponents/AddSubject";
import { useState } from "react";

export const Subjects = () => {
  const dispatch = useDispatch();
  const [isAddOpen, setIsAddOpen] = useState(false);

  const subjects = useSelector((state: any) => state.subjects);
  const teaching = useSelector((state: any) => state.teaching);
  const sessions = useSelector((state: any) => state.sessions);
  // const [subjects,setSubjects] =useState()
  const teachers = useSelector((state: any) => state.teachers);
  const handleDelete = (id: any) => {
    Swal.fire({
      title: "Are you sure  to delete this Subject?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const session = await sessions.find((s: any) => s.subject_id == id);
        if (session) {
          await SessionService.deleteSessionBySubjectId(id);
          dispatch(deleteSession(session.id));
        }
        await SubjectService.deleteSubject(id);
        dispatch(deleteSubject(id));
      }
    });
  };
  const subjectsRows = subjects.map((subject: any) => {
    const teach = teaching.find((teach: any) => teach.subject_id == subject.id);
    const teacher = teachers.find(
      (teacher: any) => teacher.id == teach?.teacher_id
    );
    return (
      <tr className="bg-fff" key={subject.id}>
        <th scope="row">{subject.id}</th>
        <td>{subject?.title}</td>
        <td>{teach?.grade_level}</td>
        <td>{teacher && teacher.first_name + " " + teacher.last_name}</td>
        <td>
          {/* to={"/students/"+obj.id} */}
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/subjects/` + subject.id}
            type="button"
            className="btn btn-primary btn-sm "
          >
            Details
          </Link>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/subjects/` + "update/" + subject.id}
            type="button"
            className="btn btn-success btn-sm mx-2 "
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(subject.id)}
            type="button"
            className="btn  btn-danger btn-sm "
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <><div className="container">
      
      <button
          onClick={() => {
            setIsAddOpen(!isAddOpen);
          }}
          className="btn btn-primary "
        >
          Add new Subject
        </button>
        {isAddOpen && <AddSubject />}
        <IconTabs
          columns={["ID", "Title", "Level", "Teacher", "Action"]}
          rows={subjectsRows}
        />
    </div>
    </>
  );
};
