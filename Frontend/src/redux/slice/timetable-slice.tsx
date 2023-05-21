import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import timetableService from '../../services/timetable.service';
export const fetchTimetables: any = createAsyncThunk(
  'timetables/fetchTimetables',
  async () => {
    const response = await timetableService.getAllTimetable();
    return response;
  },
);

const timetablesSlice = createSlice({
  name: 'timetables',
  initialState: [] as any[],
  reducers: {
    addTimetable: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    deleteTimetable: (state = [], action: PayloadAction<number>) => {
      return state.filter((c: any) => c.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchTimetables.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export const { addTimetable, deleteTimetable } = timetablesSlice.actions;
export default timetablesSlice.reducer;
