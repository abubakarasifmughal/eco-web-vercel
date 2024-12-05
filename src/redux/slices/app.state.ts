import { createSlice } from "@reduxjs/toolkit";

interface RegisterationFlow {
  userData: {
    email: string;
    password: string;
  };
  siteData: {
    name: string;
    category: string;
    niche: string;
  };
}

const cleanState: RegisterationFlow = {
  userData: {
    email: "",
    password: "",
  },
  siteData: {
    category: "",
    name: "",
    niche: "",
  },
};

export const appState = createSlice({
  name: "appState",
  initialState: cleanState,
  reducers: {},
});
