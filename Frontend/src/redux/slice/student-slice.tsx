import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Student } from "../../types/type";

import studentService from "../../services/student.service";

// Define the async thunk for fetching data from the student route
export const fetchStudents: any = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await studentService.getStudents();
    return response;
  }
);
const initialState = {
  data: [] as Student[],
  isLoading: false,
  error: null,
};
const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.data.push(action.payload);
    },
    deleteStudent: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: state.data.filter(
          (student: Student) => student.id !== action.payload
        ),
      };
    },
    updateStudent: (state, action: PayloadAction<any>) => {
      const index = state.data.findIndex(
        (student: any) => student.id == action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload.data;
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for handling the fetchStudents action
    // builder.addCase(fetchStudents.pending, (state) => {
    //   state.status = 'loading';
    // });
    builder.addCase(fetchStudents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addStudent, updateStudent, deleteStudent } =
  studentsSlice.actions;
export default studentsSlice.reducer;
