import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Teacher } from '../../types/type';
import TeacherService from '../../services/teacher.service';

export const fetchTeachers: any = createAsyncThunk(
  'teachers/fetchTeachers',
  async () => {
    const data = await TeacherService.getTeachers();
    return data;
  },
);
const initialState = {
  data: [] as Teacher[],
  isLoading: false,
  error: null,
};
const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addTeacher: (state, action: PayloadAction<Teacher>) => {
      state.data.push(action.payload);
    },
    deleteTeacher: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: state.data.filter(
          (teacher: Teacher) => teacher.id !== action.payload,
        ),
      };
    },
    updateTeacher: (state, action: PayloadAction<any>) => {
      const index = state.data.findIndex(
        (teacher: any) => teacher.id == action.payload.id,
      );
      if (index !== -1) {
        state.data[index] = action.payload.data;
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for handling the fetchTeachers action
    builder.addCase(fetchTeachers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchTeachers.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addTeacher, deleteTeacher, updateTeacher } =
  teachersSlice.actions;
export default teachersSlice.reducer;
