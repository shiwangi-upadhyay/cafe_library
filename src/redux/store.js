import { configureStore } from "@reduxjs/toolkit";
import { user } from "./slices/user";
import { userApi } from "./services/userApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: user.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
