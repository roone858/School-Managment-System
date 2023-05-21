import { getTokenFromCookie } from '../utils/cookies';
import { host } from './host';

class TeachingService {
  static async getAllTeachings() {
    try {
      const response = await fetch(host + '/api/teaching', {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  }
  static async getTeaching(id: string | number) {
    try {
      const response = await fetch(host + `/api/teaching/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  }
  static async insertTeaching(data: any) {
    try {
      const response = await fetch(host + '/api/teaching/', {
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
  static async updateTeaching(id: any, data: any) {
    try {
      const response = await fetch(host + `/api/teaching/${id}`, {
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
  static async deleteTeaching(id: number) {
    fetch(host + `/api/teaching/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
  static async deleteTeachingByTeacherID(id: number) {
    fetch(host + `/api/teaching/teacher/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
}
export default TeachingService;
