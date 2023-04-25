import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Subject } from "../../types/type";
import SubjectService from "../../services/subject.service";

export const fetchSubjects: any = createAsyncThunk(
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
    addSubject: (state, action: PayloadAction<Subject>) => {
      state.push(action.payload);
    },
    deleteSubject: (state = [], action: PayloadAction<number>) => {
      return state.filter((subject: Subject) => subject.id !== action.payload);
    },
    updateSubject: (state = [], action: PayloadAction<any>) => {
      const index = state.findIndex((subject: any) => subject.id == action.payload.id);
      if (index !== -1) {
        state[index] = action.payload.data;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubjects.fulfilled, (state, action) => action.payload);
  },
});

export const { addSubject, deleteSubject,updateSubject } = subjectsSlice.actions;
export default subjectsSlice.reducer;
