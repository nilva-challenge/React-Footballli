import userAxios from "../../../services/userAxios";
import qs from "qs";

export const getCartInfo = () => {
  return userAxios.get("/Cart/getUserCart.php");
};

export const requestIncrement = (cartItemID) => {
  return userAxios.post(
    "/Cart/increaseCartItem.php",
    qs.stringify({ cartItemID })
  );
};

export const requestDecrement = (cartItemID) => {
  console.log("requestDecrement");
  return userAxios.post(
    "/Cart/decreaseCartItem.php",
    qs.stringify({ cartItemID })
  );
};

export const requestRemove = (cartItemID) => {
  console.log("requestRemove");
  return userAxios.post(
    "/Cart/removeFromCart.php",
    qs.stringify({ cartItemID })
  );
};

export const requestAdd = (productID) => {
  return userAxios.post("/Cart/addToCart.php", qs.stringify({ productID }));
};
