import { getTokenFromCookie } from "../utils/cookies";

class SessionService {
  static async getAllSession() {
    try {
      const response = await fetch("http://localhost:4000/api/session", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getSession(id: string | number) {
    try {
      const response = await fetch(`http://localhost:4000/api/session/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertSession(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/session/`, {
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
  static async deleteSession(id: string) {
    fetch(`http://localhost:4000/api/session/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
  static async deleteSessionByClassID(id: string) {
    fetch(`http://localhost:4000/api/session/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
}
export default SessionService;
