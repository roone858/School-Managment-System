import { configureStore } from '@reduxjs/toolkit';
import studentsSlice from './slice/student-slice';
import teachersSlice from './slice/teacher-slice';
import loginSlice from './slice/login-slice';
import subjectSlice from './slice/subject-slice ';
import classesSlice from './slice/class-slice ';
import attendanceSlice from './slice/attendance-slice';
import notificationsSlice from './slice/notifications-slice';
import teachingSlice from './slice/teaching-slice';
import sessionsSlice from './slice/session-slice ';
import TimetablesSlice from './slice/timetable-slice';
export const store = configureStore({
  reducer: {
    students: studentsSlice,
    teachers: teachersSlice,
    subjects: subjectSlice,
    classes: classesSlice,
    teaching: teachingSlice,
    timetables: TimetablesSlice,
    sessions: sessionsSlice,
    login: loginSlice,
    attendance: attendanceSlice,
    notification: notificationsSlice,
  },
});
