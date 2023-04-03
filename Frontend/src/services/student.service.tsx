import { addStudent,deleteStudent } from "../store/actions/studentActions";


class studentService {
 
  async deleteStudent(id: string) {
    fetch(`http://localhost:4000/api/student/${id}`, {
      method: "DELETE",
    });
   
  }

  async getStudents() {
    try {
      const response = await fetch("http://localhost:4000/api/student");
      const json = await response.json();
      return json
    
    } catch (error) {
      console.log("error", error);
    }
  }
  async getStudent() {
    try {
      const response = await fetch("http://localhost:4000/api/student");
      const json = await response.json();
      return json
    
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default studentService;
