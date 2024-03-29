import { getTokenFromCookie } from '../utils/cookies';
import { host } from './host';
class TeacherService {
  static async getTeachers() {
    try {
      const response = await fetch(host + '/api/teacher', {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  }
  static async getTeacher() {
    try {
      const response = await fetch(host + '/api/teacher');
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  }
  static async insertTeacher(data: any) {
    try {
      const response = await fetch(host + '/api/teacher/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getTokenFromCookie()}`,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  }
  static async updateTeacher(id: any, data: any) {
    try {
      const response = await fetch(host + `/api/teacher/${id}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getTokenFromCookie()}`,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  }
  static async deleteTeacher(id: number) {
    const response = await fetch(host + `/api/teacher/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `${getTokenFromCookie()}` },
    });

    return response;
  }
}
export default TeacherService;
