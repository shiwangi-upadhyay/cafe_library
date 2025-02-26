import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    userData: null,
    justLoggedIn: false,
    franchiseId: "",
  },
  reducers: {
    changeLoggedIn: (state, action) => {
      state.justLoggedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setFranchiseId: (state, action) => {
      state.franchiseId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLoggedIn, setUserData, setFranchiseId } = user.actions;
