import { getTokenFromCookie } from "../utils/cookies";
class TeacherService {
  static async getTeachers() {
    try {
      const response = await fetch("http://localhost:4000/api/teacher", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getTeacher() {
    try {
      const response = await fetch("http://localhost:4000/api/teacher");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertTeacher(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/teacher/`, {
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
  static async deleteTeacher(id: string) {
    const response = await fetch(`http://localhost:4000/api/teacher/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });

    return response;
  }
}
export default TeacherService;
