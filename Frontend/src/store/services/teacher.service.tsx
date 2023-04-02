class teacherService {
  async deleteTeacher(id: string) {

    fetch(`http://localhost:4000/api/teacher/${id}`, {
      method: "DELETE",
    });
  }

  async getTeachers() {
    try {
      const response = await fetch("http://localhost:4000/api/teacher");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default teacherService ;
