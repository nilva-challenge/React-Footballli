import { call, put } from "redux-saga/effects";
import { decrement, increment, setInfo, updateCart } from "../../cartInfoSlice";
import { showNotification } from "@mantine/notifications";
import {
  getCartInfo,
  requestIncrement,
  requestDecrement,
  requestRemove,
  requestAdd,
} from "./../requests/cart";

export function* handleGetCartInfo() {
  try {
    const response = yield call(getCartInfo);
    if (response.status === 200) {
      const { data } = response;
      if (data.ok) {
        const { body } = data;
        yield put(setInfo(body));
      }
    } else {
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleIncrement(action) {
  const { id } = action.payload;
  if (id) {
    try {
      const response = yield call(requestIncrement, id);
      if (response.data.ok) {
        yield put(increment);
      } else {
        console.log(data);
      }
    } catch (e) {
      console.log("handleIncrement", e);
    }
  }
}

export function* handleRemoveFromCart(action) {
  const { id } = action.payload;
  if (id) {
    try {
      const response = yield call(requestRemove, id);
      if (response.data.ok) {
        yield put(increment);
      } else {
        console.log(data);
      }
    } catch (e) {
      console.log("handleRemove", e);
    }
  }
}

export function* handleAddToCart(action) {
  const { productID } = action.payload;
  if (productID) {
    try {
      const response = yield call(requestAdd, productID);
      if (response.data.ok) {
        const body = response.data.body;
        yield put(updateCart(body));
      } else {
        showNotification({
          color: "orange",
          title: "توجه",
          message: response.data.errors,
          style: { backgroundColor: "orange", color: "#fff" },
          styles: (theme) => ({
            description: {
              color: "#fff",
              textAlign: "right",
            },
            title: {
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "10px",
            },
          }),
        });
      }
    } catch (e) {
      console.log("handleAddToCart", e);
    }
  }
}

export function* handleDecrement(action) {
  const { id } = action.payload;
  if (id) {
    try {
      const response = yield call(requestDecrement, id);
      if (response.data.ok) {
        yield put(decrement);
      } else {
        console.log(data);
      }
    } catch (e) {
      console.log("handleDecrement", e);
    }
  }
}
