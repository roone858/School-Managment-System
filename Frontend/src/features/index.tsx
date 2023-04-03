import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slice/student-slice";
import teachersSlice from "./slice/teacher-slice";
export const store = configureStore({
     reducer:{
         students: studentsSlice,
         teachers: teachersSlice,
     }
})