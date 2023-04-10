import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { Attendance } from "../../types/type";

const attendanceSlice = createSlice({
  name: "Attendances",
  initialState: [] as any[],
  reducers: {
    addAttendance: (state, action:PayloadAction<any>) => {
      state.push(action.payload);
    },
    deleteAttendance: (state = [], action:PayloadAction<number>) => {
      return state.filter((attendance:any) => attendance.id !== action.payload);
    },
  },
});

export const { addAttendance, deleteAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;

