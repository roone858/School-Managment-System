import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Teacher } from "../../types/type";

const coursesSlice = createSlice({
  name: "courses",
  initialState: [] as any[],
  reducers: {
    addCourse: (state, action:PayloadAction<any>) => {
      state.push(action.payload);
    },
    deleteCourse: (state = [], action:PayloadAction<number>) => {
      return state.filter((course:any) => course.id !== action.payload);
    },
  },
});

export const { addCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
