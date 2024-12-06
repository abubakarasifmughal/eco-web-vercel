import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTest } from "../apis/app.api";

export const fetchUserThunk = createAsyncThunk(
  "fetchUserThunk",
  await fetchTest()
);

export const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    data: {} as unknown,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.data = {
        message: "Loading...",
      };
    });
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchUserThunk.rejected, (state) => {
      // Do some state setting when error
      state.data = {
        message: "THERE IS AN ERROR",
      };
    });
  },
});
