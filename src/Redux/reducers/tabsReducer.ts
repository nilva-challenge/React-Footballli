import { getFormatDateApi, getTabsDatesArray } from "../../Helpers/Helpers";
import {
  SELECT_A_LEAGUE,
  SELECT_DATE,
  SELECT_TAB_PART_TO_SHOW,
  tabsActionsDispatchTypes,
} from "../actions/tabsActionTypes";

interface TabsDataTypes {
  selectedDate: string;
  tabDatesArray: string[];
  selectedPartTabToShow: string;
  selectedLeague: string;
}

const initialState = {
  selectedDate: getFormatDateApi(null),
  tabDatesArray: getTabsDatesArray(),
  selectedPartTabToShow: "لیگ ها",
  selectedLeague: "",
};

export const tabsReducer = (
  state: TabsDataTypes = initialState,
  action: tabsActionsDispatchTypes
): TabsDataTypes => {
  switch (action.type) {
    case SELECT_DATE:
      return {
        ...state,
        selectedDate: action.payload,
        tabDatesArray: getTabsDatesArray(action.payload),
      };
    case SELECT_TAB_PART_TO_SHOW:
      return {
        ...state,
        selectedPartTabToShow: action.payload,
      };
    case SELECT_A_LEAGUE:
      return {
        ...state,
        selectedLeague: action.payload,
      };
    default:
      return state;
  }
};
