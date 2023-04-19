export interface Student {
  id?: Number;
  firstname: string;
  lastname: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
}
export interface Teacher {
  id?: Number;
  firstname: string;
  lastname: string;
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
export interface Admin {
  id: Number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
}

export interface Attendance {
  id?: number;
  studentid: string;
  courseid: string;
  attenddate?: number;
}
export interface Message {
  id: Number;
  message: Text;
  generated_at: string;
}
export interface Notification {
  messages: Message[];
  isVisible: Boolean;
}

export interface LoginState {
  username: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
export interface State {
  students: Student[];
  teachers: Teacher[];
  login: LoginState;
  notification: Notification;
}
