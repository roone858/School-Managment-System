import { getTokenFromCookie } from "../utils/cookies";
import { host } from "./host";

class TimetableService {
  static async getAllTimetable() {
    try {
      const response = await fetch(host +"/api/timetable", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getTimetable(id: string | number) {
    try {
      const response = await fetch(host +`/api/timetable/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertTimetable(data: any) {
    try {
      const response = await fetch(host +`/api/timetable/`, {
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
  static async deleteTimetable(id: string) {
    fetch(host +`/api/timetable/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
}
export default TimetableService;
