import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slices/app.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      appSlice: appSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
