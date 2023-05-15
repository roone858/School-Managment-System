import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Attendance } from "../../types/type";
import NotificationService from "../../services/notification.service";
export const fetchStudents: any = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await NotificationService.getNotification();
    return response;
  }
);
const initialState = {
  messages: [] as any[],
  isVisible: false,
  isLoading:false,
  error:null,
};
const notificationSlice = createSlice({
  name: "Attendances",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<any>) => {
      state.messages.unshift(action.payload);
    },
    clearAllNotification: (state) => {
      state.messages = [];
    },
    setRedFlag: (state, action: PayloadAction<any>) => {
      state.isVisible = action.payload;
    },
  },
});

export const { addNotification, setRedFlag, clearAllNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
