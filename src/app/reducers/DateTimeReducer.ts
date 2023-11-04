import { DateTime } from "luxon";

import { DEFAULT_DATE_TIMES } from "../components/segments/dates-navbar/DatesNavbar.config";

export enum DateTimeActions {
  SET = "dateTime/set",
}

type DateTimeAction = {
  type: string;
  payload: {
    dateTime: DateTime;
  };
};

type StateType = {
  dateTime: DateTime;
};

export default function DateTimeReducer(
  state: StateType = { dateTime: DEFAULT_DATE_TIMES[3] },
  action: DateTimeAction
) {
  switch (action.type) {
    case DateTimeActions.SET:
      return { dateTime: action.payload };
    default:
      return state;
  }
}
