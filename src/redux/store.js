import { configureStore } from "@reduxjs/toolkit";
import { sunnyApi } from "./api/sunnyApi";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [sunnyApi.reducerPath]: sunnyApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sunnyApi.middleware);
  },
});

export default store;
