import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Course} from "../../types/type"


const coursesSlice = createSlice({
  name: "courses",
  initialState: [] as Course[],
  reducers: {
    addCourse: (state, action:PayloadAction<Course>) => {
      state.push(action.payload);
    },
    deleteCourse: (state = [], action:PayloadAction<number>) => {
      return state.filter((course:Course) => course.id!== action.payload);
    },
  },
});

export const { addCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
