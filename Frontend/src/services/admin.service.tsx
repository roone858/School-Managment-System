import { getTokenFromCookie } from "../utils/cookies";
import { host } from "./host";
class AdminService {
  async getAllAdmins() {
    try {
      const response = await fetch(host +"/api/admin", {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  async getAdminByUsername(username:string) {
     try {
       const response = await fetch(host +`/api/admin/username/${username}`, {
         headers: { Authorization: `${getTokenFromCookie()}` },
       });
       const json = await response.json();
       return json;
     } catch (error) {
       console.log("error", error);
     }
   }

  async insertAdmin(data: any) {
    try {
      const response = await fetch(host +`/api/admin/`, {
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
  async changeAdminPassword(data: any) {
    try {
      const response = await fetch(host +`/api/admin/changepass`, {
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
  async deleteAdmin(id:string) {
    const response = await fetch(host +`/api/admin/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
    return response;
  }
  async updateAdmin(id:string) {
    const response = await fetch(host +`/api/admin/${id}`, {
      method: "UPDATE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
    return response;
  }
}

export default AdminService;
