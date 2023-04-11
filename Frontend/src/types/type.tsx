export interface Student {
  id?: Number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
}
export interface Student {
  id?: Number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
}
export interface Teacher {
  id?: Number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
}

interface StudentAction {
  type: string;
  payload: Student | number;
}
export interface Course {
  id?: number;
  title: string;
  description: string;
  teacherid: number;
}

export interface Attendance {
  id?: number;
  studentid: string;
  courseid: string;
  attenddate?: number;
}
