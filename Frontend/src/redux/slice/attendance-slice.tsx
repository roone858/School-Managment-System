import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Attendance } from '../../types/type';
import AttendanceService from '../../services/attendance.service';

export const fetchAttendance: any = createAsyncThunk(
  'attendance/fetchAttendance',
  async () => {
    const response = await AttendanceService.getAttendance();
    return response;
  },
);
const initialState = {
  data: [] as Attendance[],
  isLoading: false,
  error: null,
};
const attendanceSlice = createSlice({
  name: 'Attendances',
  initialState,
  reducers: {
    addAttendance: (state, action: PayloadAction<Attendance>) => {
      state.data.push(action.payload);
    },
    deleteAttendance: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        data: state.data.filter(
          (attendance: Attendance) => attendance.id !== action.payload,
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAttendance.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAttendance.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchAttendance.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addAttendance, deleteAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;
