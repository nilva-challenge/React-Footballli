import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  query: string;
}

const initialState: IState = {
  query: "",
};

/**
 * This slice is responsible to hold a query string of user
 * to determine which symbol or company should be shown at the moment in the home page.
 */
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    queryChanged(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const { queryChanged } = appSlice.actions;

export default appSlice.reducer;
