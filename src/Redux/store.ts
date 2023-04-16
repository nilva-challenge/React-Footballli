import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Reducer } from "./reducers/rootReducer";

export const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type rootStore = ReturnType<typeof Reducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  rootStore,
  unknown,
  Action
>;
