import { getTokenFromCookie } from "../utils/cookies";

class studentService {
  static  async deleteStudent(id: number) {
   const response= await fetch(`http://localhost:4000/api/student/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    })
    // .then(result=>result.json()).then(data => data)
    // console.log(response)
    // return response;
  }

  static  async getStudents() {
    try {
      const response = await fetch("http://localhost:4000/api/student", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getStudent() {
    try {
      const response = await fetch("http://localhost:4000/api/student");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertStudent(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/student/`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async updateStudent(id: any,data:any) {
    try {
      const response = await fetch(`http://localhost:4000/api/student/${id}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromCookie()}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default studentService;
