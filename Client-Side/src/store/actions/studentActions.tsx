export interface Student {
  id?: Number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
}
export const addStudent = (student: any) => ({
  type: "addStudent",
  payload: student,
});

export const deleteStudent = (id:Number) => ({
  type: "removeStudent",
  payload: id,
});











