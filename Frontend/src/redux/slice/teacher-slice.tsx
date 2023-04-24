import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Teacher } from "../../types/type";
import TeacherService from "../../services/teacher.service";

export const fetchTeachers  :any= createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const data = await TeacherService.getTeachers();
    return data;
  }
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState: [] as Teacher[],
  reducers: {
    addTeacher: (state, action: PayloadAction<Teacher>) => {
      state.push(action.payload);
    },
    deleteTeacher: (state = [], action: PayloadAction<any>) => {
      return state.filter((teacher: Teacher) => teacher.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for handling the fetchTeachers action
    //  builder.addCase(fetchTeachers.pending, (state) => {
    //   state.status = 'loading';
    // });
    builder.addCase(fetchTeachers.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchTeachers.rejected, (state, action) => {
      // state.status = 'failed';
      // state = action.error.message;
    });
  },
});

export const { addTeacher, deleteTeacher } = teachersSlice.actions;
export default teachersSlice.reducer;
