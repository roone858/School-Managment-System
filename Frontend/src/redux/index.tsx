import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slice/student-slice";
import teachersSlice from "./slice/teacher-slice";
import tokenSlice from "./slice/token-slice";
export const store = configureStore({
     reducer:{
         students: studentsSlice,
         teachers: teachersSlice,
         token:tokenSlice,
     }
})