import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

export default store;
