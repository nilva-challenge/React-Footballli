import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getScores } from "./service";
import { footballSlice } from "./slice";

const footballActions = footballSlice.actions;

export const scores = (
  date: String
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await getScores(date);
    //   SnackbarUtils.success("logged in successfully");
    dispatch(footballActions.setScores(response));
  };
};
