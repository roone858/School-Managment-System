import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Subject} from "../../types/type"
import ClassService from "../../services/class.service";

export const fetchClasses:any = createAsyncThunk(
  "classes/fetchClasses",
  async () => {
    const response = await ClassService.getAllClass();
    return response;
  }
);
const classesSlice = createSlice({
  name: "classes",
  initialState: [] as any[],
  reducers: {
    addClass: (state, action:PayloadAction<any>) => {
      state.push(action.payload);
    },
    deleteClass: (state = [], action:PayloadAction<number>) => {
      return state.filter((c:any) => c.id!== action.payload);
    },
  },extraReducers:(builder)=>{
    builder.addCase(fetchClasses.fulfilled, (state, action) => action.payload);
    
  }
});

export const { addClass, deleteClass } = classesSlice.actions;
export default classesSlice.reducer;
