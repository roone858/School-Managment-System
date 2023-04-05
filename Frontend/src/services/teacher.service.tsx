class TeacherService {
  async getTeachers() {
    try {
      const response = await fetch("http://localhost:4000/api/teacher", {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  async getTeacher() {
    try {
      const response = await fetch("http://localhost:4000/api/teacher");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  async insertTeacher(data: any) {
    try {
      const response = await fetch(`http://localhost:4000/api/teacher/`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
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
  async deleteTeacher(id: string) {
    fetch(`http://localhost:4000/api/teacher/${id}`, {
      method: "DELETE",
    });
  }
}
export default TeacherService;
