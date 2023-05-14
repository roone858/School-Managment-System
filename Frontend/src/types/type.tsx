export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  dob: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
  class_id: number;
}
export interface Teacher {
  id: number;
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
  dob: string;
}
export interface Session {
  id: number;
  start_time: string;
  end_time: string;
  subject_id: number;
  class_id: number;
  day: string;
}
export interface ClassType {
  id: number;
  name: string;
  grade_level: string;
}
interface StudentAction {
  type: string;
  payload: Student | number;
}
export interface Subject {
  id: number;
  title: string;
  description: string;
}
export interface Teaching {
  id: number;
  teacher_id: number;
  subject_id: number;
  semester: string;
  start_date: Date;
  end_date: Date;
  grade_level: number;
}
export interface Admin {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
}

export interface Attendance {
  id: number;
  student_id: number;
  subject_id: number;
  class_session_id?: number;
  date: string;
  status: string;
}
export interface Message {
  id: number;
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
  students: { data: Student[]; isLoading: boolean; error: any };
  teachers: { data: Teacher[]; isLoading: boolean; error: any };
  subjects: { data: Subject[]; isLoading: boolean; error: any };
  classes: { data: ClassType[]; isLoading: boolean; error: any };
  sessions: { data: Session[]; isLoading: boolean; error: any };
  teaching: { data: Teaching[]; isLoading: boolean; error: any };
  attendance: { data: Attendance[]; isLoading: boolean; error: any };
  login: LoginState;
  notification: Notification;
}
