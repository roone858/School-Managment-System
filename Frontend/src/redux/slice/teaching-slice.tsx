import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import {Teaching} from "../../types/type"


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
  },
});

export const { addTeaching, deleteTeaching } = teachingSlice.actions;
export default teachingSlice.reducer;
