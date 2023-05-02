import{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { days } from "../../utils/time";
import SessionService from "../../services/session.service";
import { addSession } from "../../redux/slice/session-slice ";
import {ClassType, Session, State, Subject} from "../../types/type"
import {
  checkSessionDay,
  checkSessionTime,
} from "../../utils/checkSessionTime";
import Swal from "sweetalert2";

const AddSession = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({} as Session);
  const navigate = useNavigate();
  const teachers = useSelector((state: State) => state.teachers);
  const classes = useSelector((state: State) => state.classes);
  const subjects = useSelector((state: State) => state.subjects);
  const sessions = useSelector((state: State) => state.sessions);
  const updateData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const isFound = checkSessionTime(
      sessions,
      data.start_time,
      data.day,
      data.class_id
    );
    if (!isFound) {
      Swal.fire(" Cant  Add!", "The time period already exists", "error");
    } else {
      SessionService.insertSession(data).then((result) => {
        dispatch(addSession(result));
      });
      Swal.fire(" Added!", "The Session has been added", "success");
    }
  };
  return (
    <div className="add-form bg-white p-4 my-4 rounded">
      <form className="form-row gap-2 " onSubmit={handleSubmit}>
        <div className="form-row d-flex flex-column flex-lg-row flex-wrap ">
          <div className="form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3">
            <label htmlFor="inputClass">Class</label>
            <br />
            <select
              id="inputClass"
              onChange={updateData}
              name="class_id"
              className="form-control"
              required
            >
              <option>Select Class </option>
              {classes.map((cla: ClassType) => (
                <option key={cla.id} value={cla.id}>
                  {cla.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3">
            <label htmlFor="inputSubject">Subject</label>
            <br />
            <select
              id="inputSubject"
              onChange={updateData}
              name="subject_id"
              className="form-control"
              required
            >
              <option>Select Subject </option>
              {subjects.map((subject: Subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3 ">
            <label htmlFor="inputDay">Day</label>
            <br />
            <select
              id="inputDay"
              onChange={updateData}
              name="day"
              className="form-control"
              required
            >
              <option>Select Day </option>
              {days.map((day: string) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className={"form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  "}>
            <label htmlFor="first-name">Start Time</label>
            <input
              className="form-control"
              name="start_time"
              onChange={updateData}
              placeholder="Name"
              type="time"
              id="inputName4"
              required
            />
          </div>
          <div className={"form-group col-sm-12  col-lg-5  col-xl-3 mx-lg-3  "}>
            <label htmlFor="first-name">End Time</label>
            <input
              className="form-control"
              name="end_time"
              onChange={updateData}
              placeholder="Grade Level"
              type="time"
              id="inputGrade_level"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary  form-group col-sm-12  my-4 col-lg-5  col-xl-3 mx-lg-3">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSession;
