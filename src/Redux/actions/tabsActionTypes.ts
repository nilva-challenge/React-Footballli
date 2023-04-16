export const SELECT_DATE = "SELECT_DATE";
export const SELECT_TAB_PART_TO_SHOW = "SELECT_TAB_PART_TO_SHOW";
export const SELECT_A_LEAGUE = "SELECT_A_LEAGUE";

interface SelectDate {
  type: typeof SELECT_DATE;
  payload: string;
}
interface SelectTabPartToShow {
  type: typeof SELECT_TAB_PART_TO_SHOW;
  payload: string;
}
interface SelectALeague {
  type: typeof SELECT_A_LEAGUE;
  payload: string;
}

export type tabsActionsDispatchTypes =
  | SelectDate
  | SelectTabPartToShow
  | SelectALeague;
