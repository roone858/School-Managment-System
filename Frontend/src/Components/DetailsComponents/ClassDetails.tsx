import '../../style/details.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State, ClassType } from '../../types/type';
import GetStudentByClass from '../GetComponents/GetStudentByClass';
import maleAvatar from '../../assets/maleAvatar.png';
import femaleAvatar from '../../assets/femaleAvatar.png';
import { Table } from '../Table';

const ClassDetails = () => {
  const params = useParams();

  const classes = useSelector((state: State) => state.classes.data);
  const students = useSelector((state: State) => state.students.data);
  const c = classes.find((c: ClassType) => c.id == Number(params.id));
  const handleDelete = () => {
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You won\'t be able to revert this!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete !',
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     await StudentService.deleteStudent(id);
    //     dispatch(deleteStudent(id));
    //     Swal.fire(' Deleted!', 'student deleted', 'success');
    //   }
    // });
  };
  return (
    <div className="details container p-4">
      {!c ? (
        <div>loading...</div>
      ) : (
        <>
          <div className="card mh-15 w-80 c-image">
            <Table
              columns={[
                'ID ',
                'Photo',
                'Name',
                'DOP',
                'Address',
                'Class',
                'Actions',
              ]}
              rows={
                <GetStudentByClass
                  students={students}
                  classId={params.id}
                  classes={classes}
                  handleDelete={handleDelete}
                  maleAvatar={maleAvatar}
                  femaleAvatar={femaleAvatar}
                />
              }
            />
          </div>
          <div className="card">
            <ul className="about-content list-group list-group-flush">
              <li className="list-group-item">
                <span>Class Name :</span>
                <span>{c.name}</span>
              </li>
              <li className="list-group-item">
                <span>level :</span>
                <span>{c.grade_level}</span>
              </li>
            </ul>
            <div className="card-body">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={'/classes/' + 'update/' + params.id}
                type="button"
                className="btn btn-success  "
              >
                Update
              </Link>
              <button
                // onClick={() => handleDelete(c.id)}
                type="button"
                className="btn  btn-danger mx-2 "
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClassDetails;
