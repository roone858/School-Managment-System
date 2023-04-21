import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slice/student-slice";
import teachersSlice from "./slice/teacher-slice";
import loginSlice from "./slice/login-slice";
import courseSlice from "./slice/course-slice ";
import attendanceSlice from "./slice/attendance-slice";
import notificationsSlice from "./slice/notifications-slice";
import teachingSlice from "./slice/teaching-slice";
export const store = configureStore({
  reducer: {
    students: studentsSlice,
    teachers: teachersSlice,
    courses: courseSlice,
    teaching: teachingSlice,
    login: loginSlice,
    attendance: attendanceSlice,
    notification:notificationsSlice
  },
});
