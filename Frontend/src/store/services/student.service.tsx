import { addStudent,deleteStudent } from "../actions/studentActions";


class studentService {
 
  async deleteStudent(dispatch:any,id: string) {
    fetch(`http://localhost:4000/api/student/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteStudent(Number(id)));
  }

  async getStudents(dispatch:any) {
    try {
      const response = await fetch("http://localhost:4000/api/student");
      const json = await response.json();
      json.map((student:any)=> dispatch(addStudent(student)) )
    
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default studentService;
