import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Subject} from "../../types/type"
import SubjectService from "../../services/subject.service";

export const fetchSubjects:any = createAsyncThunk(
  "subjects/fetchSubjects",
  async () => {
    const response = await SubjectService.getAllSubjects();
    return response;
  }
);
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
  extraReducers:(builder) => {

    builder.addCase(fetchSubjects.fulfilled, (state, action) => action.payload);
  }
});

export const { addSubject, deleteSubject } = subjectsSlice.actions;
export default subjectsSlice.reducer;
