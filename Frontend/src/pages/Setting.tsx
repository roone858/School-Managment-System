import { useSelector, useDispatch } from "react-redux";
import { addStudent, deleteStudent } from "../features/slice/student-slice";

export const Setting = () => {
  const students = useSelector((state) => state);
  const dispatch = useDispatch();


  

  return (
    <div className="setting">
     
    </div>
  );
};
