import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

export default store;
