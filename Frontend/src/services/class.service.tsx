import Swal from "sweetalert2";
import { getTokenFromCookie } from "../utils/cookies";

class ClassService {
  static async getAllClass() {
    try {
      const response = await fetch("http://localhost:4000/api/class", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getClass(id: string | number) {
    try {
      const response = await fetch(`http://localhost:4000/api/class/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertClass(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/class/`, {
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
  static async updateClass(id: any, data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/class/${id}`, {
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
  static async deleteClass(id: string) {
    return fetch(`http://localhost:4000/api/class/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    }).then((result) => result);
  }
}
export default ClassService;
