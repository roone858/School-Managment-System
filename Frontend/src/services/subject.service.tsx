import { getTokenFromCookie } from '../utils/cookies';
import { host } from './host';

class SubjectService {
  static async getAllSubjects() {
    try {
      const response = await fetch(host + '/api/subject', {
        headers: { Authorization: `${getTokenFromCookie()}` },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  }
  static async getSubject(id: string | number) {
    try {
      const response = await fetch(host + `/api/subject/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error', error);
    }
  }
  static async insertSubject(data: any) {
    try {
      const response = await fetch(host + '/api/subject/', {
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
  static async updateSubject(id: any, data: any) {
    try {
      const response = await fetch(host + `/api/subject/${id}`, {
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
  static async deleteSubject(id: number) {
    fetch(host + `/api/subject/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `${getTokenFromCookie()}` },
    });
  }
}
export default SubjectService;
