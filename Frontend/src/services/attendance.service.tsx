import { getTokenFromCookie } from "../utils/cookies";
import { host } from "./host";
class AttendanceService {
  static async getAttendance() {
    try {
      const response = await fetch(host +"/api/attendance", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getOneAttendance() {
    try {
      const response = await fetch(host +"/api/attendance");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertAttendance(data: any) {
    try {
      const response = await fetch(host +`/api/attendance/`, {
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
  static async deleteAttendance(id: string) {
    const response = await fetch(host +`/api/attendance/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
    const json = await response.json();
    return json;
  }
}
export default AttendanceService;
