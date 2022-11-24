import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { propertiesApi } from "./api/propertiesApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(propertiesApi.middleware);
  },
});

export default store;
