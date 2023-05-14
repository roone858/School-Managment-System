import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TeachingService from "../../services/teaching.service";
import { Teaching } from "../../types/type";

export const fetchTeaching: any = createAsyncThunk(
  "teaching/fetchTeaching",
  async () => {
    const data = await TeachingService.getAllTeachings();
    return data;
  }
);
const initialState = {
  data: [] as Teaching[],
  isLoading: false,
  error: null,
};
const teachingSlice = createSlice({
  name: "Teaching",
  initialState,
  reducers: {
    addTeaching: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
    deleteTeaching: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        data: state.data.filter((teach: any) => teach.id !== action.payload),
      };
    },
    updateTeaching: (state, action: PayloadAction<any>) => {
      const index = state.data.findIndex(
        (tech: any) => tech.id == action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload.data;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTeaching.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTeaching.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchTeaching.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addTeaching, deleteTeaching, updateTeaching } =
  teachingSlice.actions;
export default teachingSlice.reducer;
