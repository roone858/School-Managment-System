import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Subject } from "../../types/type";
import SessionService from "../../services/session.service";

export const fetchSessions: any = createAsyncThunk(
  "sessions/fetchSessions",
  async () => {
    const response = await SessionService.getAllSession();
    return response;
  }
);

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: [] as any[],
  reducers: {
    addSession: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    deleteSession: (state = [], action: PayloadAction<number>) => {
      return state.filter((c: any) => c.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSessions.fulfilled, (state, action) => action.payload);
  },
});

export const { addSession, deleteSession } = sessionsSlice.actions;
export default sessionsSlice.reducer;
