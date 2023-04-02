import { Student } from "../actions/studentActions";
interface State {
  [key: string]: any;
}
interface StudentAction {
  type: string;
  payload: Student;
}

const studentReducer = (
  state: State = { students: [] },
  action: StudentAction
) => {
  switch (action.type) {
    case "addStudent":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case "removeStudent":
      return {
        ...state,
        students: state.students.filter(
          (student: any) => student.id != action.payload
        ),
      };

   

    default:
      return state;
  }
};

export default studentReducer;
