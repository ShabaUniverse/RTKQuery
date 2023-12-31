import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./dataSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
