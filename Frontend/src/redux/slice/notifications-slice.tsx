import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Attendance } from "../../types/type";
const initialState = {
  messages: [] as any[],
  isVisible: false,
  isLoading:false,
  error:null,
};
const notificationSlice = createSlice({
  name: "Attendances",
  initialState: { messages: [] as any[], isVisible: false },
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
