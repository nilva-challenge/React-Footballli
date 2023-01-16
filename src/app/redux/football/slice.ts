import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { scoresListProps } from "../../../components/ScoresList";

export interface FootballState {
  scores: scoresListProps[];
}

const initialState: FootballState = {
  scores: [],
};

export const footballSlice = createSlice({
  name: "football",
  initialState,
  reducers: {
    setScores: (state, action: PayloadAction<scoresListProps[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.scores = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScores } = footballSlice.actions;

export default footballSlice.reducer;
