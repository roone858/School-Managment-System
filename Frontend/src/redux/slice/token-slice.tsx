import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Student } from "../../types/type";

const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    addToken: (state, action: PayloadAction<string>) =>
      ( action.payload),
    deleteToken: (state, action: PayloadAction<string>) => {
      return "";
    },
  },
});

export const { addToken, deleteToken } = tokenSlice.actions;
export default tokenSlice.reducer;
