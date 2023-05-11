import { getTokenFromCookie } from "../utils/cookies";
import { host } from "./host";

class SessionService {
  static async getAllSession() {
    try {
      const response = await fetch(host +"/api/session", {
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
      const response = await fetch(host +`/api/session/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async insertSession(data: any) {
    try {
      const response = await fetch(host +`/api/session/`, {
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
  static async deleteSession(id: number) {
    fetch(host +`/api/session/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
  static async deleteSessionByClassID(id: number) {
     return fetch(host +`/api/session/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    }).then( result => result);
  }
  static async deleteSessionBySubjectId(id: Number) {
    return fetch(host +`/api/session/deleteBySession/${id}`, {
     method: "DELETE",
     headers: { Authorization: `${getTokenFromCookie()}` },
   }).then( result => result);
 }
}
export default SessionService;
