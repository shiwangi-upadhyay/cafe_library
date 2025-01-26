import { configureStore } from "@reduxjs/toolkit";
import { user } from "./slices/user";
import { userApi } from "./services/userApi";
import { sanityApi } from "./services/sanityApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [sanityApi.reducerPath]: sanityApi.reducer,
    user: user.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, sanityApi.middleware),
});
