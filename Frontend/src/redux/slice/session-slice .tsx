import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Session } from "../../types/type";
import SessionService from "../../services/session.service";

export const fetchSessions: any = createAsyncThunk(
  "sessions/fetchSessions",
  async () => {
    const response = await SessionService.getAllSession();
    return response;
  }
);
const initialState = {
  data: [] as Session[],
  isLoading: false,
  error: null,
};
const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    addSession: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
    deleteSession: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        data: state.data.filter((c: any) => c.id !== action.payload),
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSessions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSessions.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchSessions.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addSession, deleteSession } = sessionsSlice.actions;
export default sessionsSlice.reducer;
