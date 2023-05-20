import { configureStore } from "@reduxjs/toolkit";
import cartInfo from "./cartInfoSlice";
import createSagaMiddleware from "redux-saga";
import { watcher } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    cart: cartInfo,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcher);
