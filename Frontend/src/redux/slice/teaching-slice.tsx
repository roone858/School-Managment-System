import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TeachingService from "../../services/teaching.service";
// import {Teaching} from "../../types/type"

export const fetchTeaching :any= createAsyncThunk(
  "teaching/fetchTeaching",
  async () => {
    const data = await TeachingService.getAllTeachings();
    return data;
  }
);
const teachingSlice = createSlice({
  name: "Teaching",
  initialState: [] as any[],
  reducers: {
    addTeaching: (state, action:PayloadAction<any>) => {
      state.push(action.payload);
    },
    deleteTeaching: (state = [], action:PayloadAction<number>) => {
      return state.filter((teach:any) => teach.id!== action.payload);
    },
  },extraReducers: (builder)=>{
    builder.addCase(fetchTeaching.fulfilled, (state, action) => action.payload);
  }
});

export const { addTeaching, deleteTeaching } = teachingSlice.actions;
export default teachingSlice.reducer;
