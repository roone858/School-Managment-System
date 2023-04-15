import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Attendance } from "../../types/type";

const notificationSlice = createSlice({
  name: "Attendances",
  initialState: []as any[] ,
  reducers: {
    addNotification: (state, action:PayloadAction<any>) => {
      state.unshift(action.payload);
    },

  },
});

export const { addNotification,  } = notificationSlice.actions;
export default notificationSlice.reducer;

