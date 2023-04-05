import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Student } from "../../types/type";

const studentsSlice = createSlice({
  name: "students",
  initialState: [] as Student[],
  reducers: {
    addStudent: (state, action:PayloadAction<Student>) => {
      state.push(action.payload);
    },
    deleteStudent: (state = [], action:PayloadAction<number>) => {
      return state.filter((student:Student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
