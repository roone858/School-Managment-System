import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slice/student-slice";
import teachersSlice from "./slice/teacher-slice";
import loginSlice from "./slice/login-slice";
import courseSlice from "./slice/course-slice ";
export const store = configureStore({
     reducer:{
         students: studentsSlice,
         teachers: teachersSlice,
         courses:courseSlice,
         login:loginSlice


     }
})