import { configureStore } from "@reduxjs/toolkit";
import { sunnyApi } from "./api/sunnyApi";
import authSlice from "./slices/authSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    [sunnyApi.reducerPath]: sunnyApi.reducer,
    auth: authSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sunnyApi.middleware);
  },
});

export default store;
