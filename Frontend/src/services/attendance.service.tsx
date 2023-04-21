import { getTokenFromCookie } from "../utils/cookies";
class AttendanceService {
  static async getAttendance() {
    try {
      const response = await fetch("http://localhost:4000/api/attendance", {
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
      const response = await fetch("http://localhost:4000/api/attendance");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertAttendance(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/attendance/`, {
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
    const response = await fetch(`http://localhost:4000/api/attendance/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
    const json = await response.json();
    return json;
  }
}
export default AttendanceService;
