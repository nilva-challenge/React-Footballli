import {
  SELECT_A_LEAGUE,
  SELECT_DATE,
  SELECT_TAB_PART_TO_SHOW,
} from "./tabsActionTypes";

export const selectDate = (date: string) => {
  return {
    type: SELECT_DATE,
    payload: date,
  };
};

export const selectTabPartToShow = (partName: string) => {
  return {
    type: SELECT_TAB_PART_TO_SHOW,
    payload: partName,
  };
};
export const selectALeague = (leagueName: string) => {
  return {
    type: SELECT_A_LEAGUE,
    payload: leagueName,
  };
};
