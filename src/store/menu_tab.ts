import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface SelectedTabState {
  selectedMenuTab?: string;
}

const initialState: SelectedTabState = {
  selectedMenuTab: "/",
};

export const authSlice = createSlice({
  name: "selectedMenuTab",
  initialState,
  reducers: {
    updateSelectMenuTab: (state, action: PayloadAction<string | undefined>) => {
      state.selectedMenuTab = action.payload;
    },
  },
});

export const activeMenu = (state: RootState) => state.menuTab.selectedMenuTab;
export const { updateSelectMenuTab } = authSlice.actions;
export default authSlice.reducer;
