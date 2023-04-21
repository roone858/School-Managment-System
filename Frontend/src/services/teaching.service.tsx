import { getTokenFromCookie } from "../utils/cookies";

class TeachingService {
  static async getAllTeachings() {
    try {
      const response = await fetch("http://localhost:4000/api/teaching", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getTeaching(id: string | number) {
    try {
      const response = await fetch(`http://localhost:4000/api/teaching/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertTeaching(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/teaching/`, {
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
  static async deleteTeaching(id: string) {
    fetch(`http://localhost:4000/api/teaching/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
}
export default TeachingService;
