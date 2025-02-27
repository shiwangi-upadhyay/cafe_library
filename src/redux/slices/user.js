import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    userData: {},
    justLoggedIn: false,
    franchiseDetails: {},
  },
  reducers: {
    changeLoggedIn: (state, action) => {
      state.justLoggedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setFranchiseDetails: (state, action) => {
      state.franchiseDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLoggedIn, setUserData, setFranchiseDetails } =
  user.actions;
