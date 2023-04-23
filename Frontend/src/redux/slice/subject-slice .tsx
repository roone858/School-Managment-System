import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Subject} from "../../types/type"


const subjectsSlice = createSlice({
  name: "subjects",
  initialState: [] as Subject[],
  reducers: {
    addSubject: (state, action:PayloadAction<Subject>) => {
      state.push(action.payload);
    },
    deleteSubject: (state = [], action:PayloadAction<number>) => {
      return state.filter((subject:Subject) => subject.id!== action.payload);
    },
  },
});

export const { addSubject, deleteSubject } = subjectsSlice.actions;
export default subjectsSlice.reducer;
