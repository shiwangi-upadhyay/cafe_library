import { createSlice } from '@reduxjs/toolkit'


export const user = createSlice({
  name: 'user',
  initialState:{
    value: 0,
    justLoggedIn: false,
  },
  reducers: {
    changeLoggedIn: (state,action) => {
      state.justLoggedIn = action.payload;
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLoggedIn, decrement, incrementByAmount } = user.actions;