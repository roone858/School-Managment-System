import { getTokenFromCookie } from "../utils/cookies";
class NotificationService {
  async getNotification() {
    try {
      const response = await fetch("http://localhost:4000/api/notification", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
 
  async insertNotification(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/notification/`, {
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
  async deleteAllNotification() {
    const response = await fetch(`http://localhost:4000/api/notification`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
     return response;
  }
}
export default NotificationService;
