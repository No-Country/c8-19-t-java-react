import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { hotelsApi } from "./api/hotelsApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(hotelsApi.middleware);
  },
});

export default store;
