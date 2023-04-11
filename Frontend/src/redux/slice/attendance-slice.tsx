import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Attendance } from "../../types/type";

const attendanceSlice = createSlice({
  name: "Attendances",
  initialState: [] as Attendance[],
  reducers: {
    addAttendance: (state, action:PayloadAction<Attendance>) => {
      state.push(action.payload);
    },
    deleteAttendance: (state = [], action:PayloadAction<number>) => {
      return state.filter((attendance:Attendance) => attendance.id !== action.payload);
    },
  },
});

export const { addAttendance, deleteAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;

