import { Teacher } from '../../types/type';
import { Link } from 'react-router-dom';

const GetAllTeachers = ({
  teachers,

  handleDelete,
  teacherAvatar,
}: any) => {
  return teachers.map((teacher: Teacher) => (
    <tr className="bg-fff" key={teacher.id}>
      <th scope="row">{teacher.id}</th>
      <td>
        <img
          src={teacherAvatar}
          style={{ height: '40px', borderRadius: '100%' }}
        />
      </td>
      <td> {teacher.first_name + ' ' + teacher.last_name}</td>
      <td>{teacher.dob.slice(0, 10)}</td>
      <td>{teacher.address}</td>

      <td>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={'/teachers/' + teacher.id}
          type="button"
          className="btn btn-primary btn-sm "
        >
          Details
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={'/teachers/' + 'update/' + teacher.id}
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
};

export default GetAllTeachers;
