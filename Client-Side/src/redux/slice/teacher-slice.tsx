import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Teacher } from "../../types/type";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: [] as Teacher[],
  reducers: {
    addTeacher: (state, action:PayloadAction<Teacher>) => {
      state.push(action.payload);
    },
    deleteTeacher: (state = [], action:PayloadAction<number>) => {
      return state.filter((teacher:Teacher) => teacher.id !== action.payload);
    },
  },
});

export const { addTeacher, deleteTeacher } = teachersSlice.actions;
export default teachersSlice.reducer;

