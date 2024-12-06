import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: {},
  reducers: {
    testAction: () => {},
  },
});

export const { testAction } = appSlice.actions;
