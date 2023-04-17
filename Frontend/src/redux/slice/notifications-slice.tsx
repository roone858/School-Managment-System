import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Attendance } from "../../types/type";

const notificationSlice = createSlice({
  name: "Attendances",
  initialState: {messages:[]as any[],isVisible:false} ,
  reducers: {
    addNotification: (state, action:PayloadAction<any>) => {
      state.messages.unshift(action.payload);
    },
    setRedFlag: (state, action:PayloadAction<any>) => {
      state.isVisible = action.payload;
    },

  },
});

export const { addNotification, setRedFlag } = notificationSlice.actions;
export default notificationSlice.reducer;

