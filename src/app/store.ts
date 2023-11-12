import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import appSlice from "../features/appSlice.ts"; // All slices such as global state and api are implemented here.

// All slices such as global state and api are implemented here.
export const store = configureStore({
  reducer: {
    app: appSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

declare module "react-redux" {
  // noinspection JSUnusedGlobalSymbols
  interface DefaultRootState extends RootState {}
}
