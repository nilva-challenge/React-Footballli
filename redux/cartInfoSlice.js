import { createSlice, current } from "@reduxjs/toolkit";
import _ from "lodash";

export const cartInfoSlice = createSlice({
  name: "cart",
  initialState: {
    financialInfo: {
      sumPrice: 0,
      sumDiscount: 0,
    },
    numberOfCartItems: 0,
  },
  reducers: {
    getInfo: (state) => {
      return state;
    },

    addToCart: (state) => {
      return state;
    },

    updateCart: (state, action) => {
      const newItem = action.payload;
      const index = _.findIndex(state.items, (item) => item.id === newItem.id);
      console.log("index", index);
      if (index > -1) {
        state.items[index].count++;
      } else {
        state.numberOfCartItems++;
        state.items = [];
        state.items.push(newItem);
      }
      const sumPrice = parseInt(newItem.price);
      const sumDiscount = parseInt(newItem.discount);
      state.financialInfo.sumPrice += sumPrice;
      state.financialInfo.sumDiscount += sumDiscount;
      state.financialInfo.cartFinalPrice += sumPrice - sumDiscount;
      return state;
    },

    setInfo: (state, action) => {
      const { payload } = action;
      payload.numberOfCartItems = payload.items.length;
      return { ...state, ...payload };
    },
    remove: (state, action) => {
      const index = _.findIndex(state.items, (item) => {
        return item.id === action.payload.id;
      });
      const sumPrice = parseInt(state.items[index].price);
      const sumDiscount = parseInt(state.items[index].discount);
      state.financialInfo.sumPrice -= sumPrice;
      state.financialInfo.sumDiscount -= sumDiscount;
      state.financialInfo.cartFinalPrice -= sumPrice - sumDiscount;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.numberOfCartItems = state.numberOfCartItems - 1;
    },
    increment: (state, action) => {
      const index = _.findIndex(state.items, (item) => {
        return item.id === action.payload.id;
      });
      state.items[index].count++;
      const sumPrice = parseInt(state.items[index].price);
      const sumDiscount = parseInt(state.items[index].discount);
      state.financialInfo.sumPrice += sumPrice;
      state.financialInfo.sumDiscount += sumDiscount;
      state.financialInfo.cartFinalPrice += sumPrice - sumDiscount;
    },
    decrement: (state, action) => {
      const index = _.findIndex(state.items, (item) => {
        return item.id === action.payload.id;
      });
      state.items[index].count--;
      const sumPrice = parseInt(state.items[index].price);
      const sumDiscount = parseInt(state.items[index].discount);
      state.financialInfo.sumPrice -= sumPrice;
      state.financialInfo.sumDiscount -= sumDiscount;
      state.financialInfo.cartFinalPrice -= sumPrice - sumDiscount;
    },

    clearCart: (state) => {
      state.numberOfCartItems = 0;
      state.items = null;
    },
  },
});

export const {
  remove,
  increment,
  decrement,
  getInfo,
  setInfo,
  addToCart,
  updateCart,
  clearCart,
} = cartInfoSlice.actions;

export default cartInfoSlice.reducer;
