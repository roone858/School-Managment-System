import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Subject} from "../../types/type"


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
  },
});

export const { addClass, deleteClass } = classesSlice.actions;
export default classesSlice.reducer;
