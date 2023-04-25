import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Student } from "../../types/type";

import studentService from "../../services/student.service";

// Define the async thunk for fetching data from the student route
export const fetchStudents:any = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await studentService.getStudents();
    return response;
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState: [] as Student[],
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.push(action.payload);
    },
    deleteStudent: (state = [], action: PayloadAction<any>) => {
      return state.filter((student: Student) => student.id !== action.payload);
    },
    updateStudent: (state = [], action: PayloadAction<any>) => {
      const index = state.findIndex(
        (student: any) => student.id == action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload.data;
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for handling the fetchStudents action
    // builder.addCase(fetchStudents.pending, (state) => {
    //   state.status = 'loading';
    // });
    builder.addCase(fetchStudents.fulfilled, (state, action) => action.payload);
    // builder.addCase(fetchStudents.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // });
  },
});

export const { addStudent, updateStudent, deleteStudent } =
  studentsSlice.actions;
export default studentsSlice.reducer;
