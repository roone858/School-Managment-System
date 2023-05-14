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
const initialState = {
  data: [] as Subject[],
  isLoading: false,
  error: null,
};
const subjectsSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<Subject>) => {
      state.data.push(action.payload);
    },
    deleteSubject: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        data: state.data.filter(
          (subject: Subject) => subject.id !== action.payload
        ),
      };
    },
    updateSubject: (state, action: PayloadAction<any>) => {
      const index = state.data.findIndex(
        (subject: any) => subject.id == action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload.data;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSubjects.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchSubjects.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addSubject, deleteSubject, updateSubject } =
  subjectsSlice.actions;
export default subjectsSlice.reducer;
