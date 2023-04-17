import { getTokenFromCookie } from "../utils/cookies";
class AdminService {
  async getAllAdmins() {
    try {
      const response = await fetch("http://localhost:4000/api/admin", {
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
       const response = await fetch(`http://localhost:4000/api/admin/username/${username}`, {
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
      const response = await fetch(`http://localhost:4000/api/admin/`, {
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
    const response = await fetch(`http://localhost:4000/api/admin/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
    return response;
  }
  async updateAdmin(id:string) {
    const response = await fetch(`http://localhost:4000/api/admin/${id}`, {
      method: "UPDATE",
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
    return response;
  }
}

export default AdminService;
