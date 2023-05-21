import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ClassType } from '../../types/type';
import ClassService from '../../services/class.service';

export const fetchClasses: any = createAsyncThunk(
  'classes/fetchClasses',
  async () => {
    const response = await ClassService.getAllClass();
    return response;
  },
);
const initialState = {
  data: [] as ClassType[],
  isLoading: false,
  error: null,
};
const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    addClass: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
    deleteClass: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        data: state.data.filter((c: any) => c.id !== action.payload),
      };
    },
    updateClass: (state, action: PayloadAction<any>) => {
      const index = state.data.findIndex(
        (cla: any) => cla.id == action.payload.id,
      );
      if (index !== -1) {
        state.data[index] = action.payload.data;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClasses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchClasses.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addClass, deleteClass, updateClass } = classesSlice.actions;
export default classesSlice.reducer;
