import { getTokenFromCookie } from "../utils/cookies";
import { host } from "./host";
class NotificationService {
 static async getNotification() {
    try {
      const response = await fetch(host +"/api/notification", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
 
  static async insertNotification(data: any) {
    try {
      const response = await fetch(host +`/api/notification/`, {
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
  static async deleteAllNotification() {
    const response = await fetch(host +`/api/notification`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
     return response;
  }
}
export default NotificationService;
