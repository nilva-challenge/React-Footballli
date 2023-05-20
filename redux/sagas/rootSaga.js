import { all, takeEvery } from "redux-saga/effects";
import {
  addToCart,
  decrement,
  getInfo,
  increment,
  remove,
} from "../cartInfoSlice";
import {
  handleAddToCart,
  handleDecrement,
  handleGetCartInfo,
  handleIncrement,
  handleRemoveFromCart,
} from "./handlers/cart";

export function* watcher() {
  yield all([
    takeEvery(getInfo.type, handleGetCartInfo),
    takeEvery(increment.type, handleIncrement),
    takeEvery(decrement.type, handleDecrement),
    takeEvery(remove.type, handleRemoveFromCart),
    takeEvery(addToCart.type, handleAddToCart),
  ]);
}
