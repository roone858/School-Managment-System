import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import IconTabs from '../Components/mui/IconTabs';
import Swal from 'sweetalert2';
import SubjectService from '../services/subject.service';
import { deleteSubject } from '../redux/slice/subject-slice ';
import SessionService from '../services/session.service';
import { deleteSession } from '../redux/slice/session-slice ';
import { AddSubject } from '../Components/AddComponents/AddSubject';
import { useState } from 'react';
import { Session, State, Subject, Teacher, Teaching } from '../types/type';
import Loading from '../layouts/Loading';

export const Subjects = () => {
  const dispatch = useDispatch();
  const [isAddOpen, setIsAddOpen] = useState(false);

  const isSubjectsLoading = useSelector(
    (state: State) => state.subjects.isLoading,
  );
  const isTeachingLoading = useSelector(
    (state: State) => state.teaching.isLoading,
  );
  const subjects = useSelector((state: State) => state.subjects.data);
  const teaching = useSelector((state: State) => state.teaching.data);
  const sessions = useSelector((state: State) => state.sessions.data);
  const teachers = useSelector((state: State) => state.teachers.data);

  const handleDelete = (id: number) => {
    Swal.fire({
      title: 'Are you sure  to delete this Subject?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete !',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const session = await sessions.find((s: Session) => s.subject_id == id);
        if (session) {
          await SessionService.deleteSessionBySubjectId(id);
          dispatch(deleteSession(session.id));
        }
        await SubjectService.deleteSubject(id);
        dispatch(deleteSubject(id));
      }
    });
  };

  if (isSubjectsLoading || isTeachingLoading) return <Loading />;

  const subjectsRows = subjects.map((subject: Subject) => {
    const teach = teaching.find(
      (teach: Teaching) => teach?.subject_id == subject?.id,
    );
    const teacher = teachers.find(
      (teacher: Teacher) => teacher.id == teach?.teacher_id,
    );
    return (
      <tr className="bg-fff" key={subject.id}>
        <th scope="row">{subject.id}</th>
        <td>{subject?.title}</td>
        <td>{teach?.grade_level}</td>
        <td>{teacher && teacher.first_name + ' ' + teacher.last_name}</td>
        <td>
          {/* to={"/students/"+obj.id} */}
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={'/subjects/' + subject.id}
            type="button"
            className="btn btn-primary btn-sm "
          >
            Details
          </Link>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={'/subjects/' + 'update/' + subject.id}
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
    <>
      <div className="container">
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
          columns={['ID', 'Title', 'Level', 'Teacher', 'Action']}
          rows={subjectsRows}
        />
      </div>
    </>
  );
};
