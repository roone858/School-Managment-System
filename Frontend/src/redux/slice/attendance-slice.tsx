import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Attendance } from "../../types/type";
import AttendanceService from "../../services/attendance.service";

export const fetchAttendance: any = createAsyncThunk(
  "attendance/fetchAttendance",
  async () => {
    const response = await AttendanceService.getAttendance();
    return response;
  }
);
const attendanceSlice = createSlice({
  name: "Attendances",
  initialState: [] as Attendance[],
  reducers: {
    addAttendance: (state, action: PayloadAction<Attendance>) => {
      state.push(action.payload);
    },
    deleteAttendance: (state = [], action: PayloadAction<number>) => {
      return state.filter(
        (attendance: Attendance) => attendance.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAttendance.fulfilled,
      (state, action) => action.payload
    );
  },
});

export const { addAttendance, deleteAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;
