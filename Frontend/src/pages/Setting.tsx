import { useSelector, useDispatch } from "react-redux";
import { addStudent, deleteStudent } from "../store/actions/studentActions";

export const Setting = () => {
  const students = useSelector((state) => state);
  const dispatch = useDispatch();
  const student = { id: 2, firstName: "Mahmoud", lastName: "Gamal" };
  const moreStudent = [
    { id: 3, firstName: "Read", lastName: "Adel" },
    { id: 4, firstName: "Ahmed", lastName: "Emad" },
    { id: 5, firstName: "Mariam", lastName: "Abd" },
    { id: 6, firstName: "Sabah", lastName: "Saadi" },
  ];
  console.log(students);

  return (
    <div className="setting">
      <button onClick={() => dispatch(addStudent([student]))}>add student</button>
      <button onClick={() => dispatch(deleteStudent(student.id))}>
        delete student
      </button>
      <button onClick={() => dispatch(addStudent(moreStudent))}>
        add more than one student
      </button>
    </div>
  );
};
