import { getTokenFromCookie } from "../utils/cookies";

class CourseService {
  static async getAllCourses() {
    try {
      const response = await fetch("http://localhost:4000/api/course", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getCourse(id: string | number) {
    try {
      const response = await fetch(`http://localhost:4000/api/course/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertCourse(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/course/`, {
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
  static async deleteCourse(id: string) {
    fetch(`http://localhost:4000/api/course/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
}
export default CourseService;
