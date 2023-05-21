import { useState } from 'react';
import { ClassType } from '../../types/type';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateClass } from '../../redux/slice/class-slice ';
import Swal from 'sweetalert2';
import ClassService from '../../services/class.service';
import Loading from '../../layouts/Loading';
const UpdateStudent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useSelector((state: any) => state.classes.data);
  const cla: ClassType | any = classes.find(
    (cla: ClassType) => cla.id === Number(id),
  );
  const [data, setData] = useState(cla);

  const updateData = (e: any) => {
    setData({ ...cla, ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure to update?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update !',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await ClassService.updateClass(id, data);
        if (res.message)
          Swal.fire('Can\'t Update!', 'Internal Server Error', 'error');
        else {
          dispatch(updateClass({ id: id, data: data }));
          Swal.fire('Updated!', 'student Updated', 'success');
        }
      }
    });
  };

  return (
    <div className="update-form">
      {!cla ? (
        <Loading />
      ) : (
        <>
          <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration">
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                        Update Class
                      </h3>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="name"
                                className="form-control form-control-lg"
                                name="name"
                                defaultValue={cla.name}
                                onChange={updateData}
                              />
                              <label className="form-label" htmlFor="name">
                                Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="grade_level"
                                defaultValue={cla.grade_level}
                                onChange={updateData}
                                name="grade_level"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="grade_level"
                              >
                                Grade Level
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-2">
                          <input
                            className="btn btn-primary btn-lg"
                            type="submit"
                            value="Submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default UpdateStudent;
