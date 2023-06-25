import { useState } from 'react';
import { Subject, State, Teacher } from '../../types/type';
import { useDispatch, useSelector } from 'react-redux';
import TeachingService from '../../services/teaching.service';
import SubjectService from '../../services/subject.service';
import { addSubject } from '../../redux/slice/subject-slice ';
import { addTeaching } from '../../redux/slice/teaching-slice';

export const AddSubject = () => {
  const teachers = useSelector((state: State) => state.teachers.data);
  const [data, setData] = useState({} as Subject);
  const dispatch = useDispatch();
  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const subject: Subject = await SubjectService.insertSubject(data);
    await TeachingService.insertTeaching({
      ...data,
      subject_id: subject.id,
    }).then((result) => {
      dispatch(addSubject(subject));
      dispatch(addTeaching(result));
    });
  };
  return (
    <div className="add-form container rounded-2 bg-white my-4 px-4 py-5">
      <form onSubmit={handleSubmit}>
        <div className="d-flex  flex-column  flex-lg-row justify-content-start flex-wrap gap-3  ">
          <div className={'form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  '}>
            <label htmlFor="first-name">Title</label>
            <input
              name="title"
              onChange={updateData}
              className="form-control"
              placeholder="Title"
              type="text"
              id="inputTitle4"
              required
            />
          </div>
          <div className={'form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  '}>
            <label htmlFor="first-name">Description</label>
            <input
              name="description"
              onChange={updateData}
              className="form-control"
              placeholder="Description"
              type="text"
              id="inputDescription"
              required
            />
          </div>

          <div className={'form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  '}>
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
              {teachers.map((teacher: Teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.first_name + ' ' + teacher.last_name}
                </option>
              ))}
            </select>
          </div>

          <div className={'form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  '}>
            <label htmlFor="first-name">Semester</label>
            <input
              className="form-control"
              name="semester"
              onChange={updateData}
              type="text"
              id="inputSemester"
              placeholder="Semester"
              required
            />
          </div>
          <div className={'form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  '}>
            <label htmlFor="first-name">Grade Level</label>
            <input
              className="form-control"
              name="grade_level"
              onChange={updateData}
              type="text"
              id="GradeLevel"
              placeholder="Grade Level"
              required
            />
          </div>

          <div className={'form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  '}>
            <label htmlFor="first-name">Start Date</label>
            <input
              className="form-control"
              name="start_date"
              onChange={updateData}
              type="date"
              id="inputStart_date"
              placeholder="Start Date"
              required
            />
          </div>
          <div className={'form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  '}>
            <label htmlFor="first-name">End Date</label>
            <input
              className="form-control"
              name="end_date"
              onChange={updateData}
              type="date"
              id="inputEnd_date"
              placeholder="End Date"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3 mt-4 "
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
