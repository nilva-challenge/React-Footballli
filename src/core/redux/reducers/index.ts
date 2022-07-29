import { Reducer } from "redux";
import { ActionType } from "../actionTypes/index";
import { fixtureState, TAction } from "./types";

const initialState: fixtureState = {
  fixtures: [],
  loading: false,
  error: null,
};

const fixtureReducer: Reducer<fixtureState, TAction> = (
  state = initialState,
  action
): any => {
  switch (action.type) {
    case ActionType.GET_FIXTURES_PENDING:
      return {
        loading: true,
        fixtures: [],
        error: null,
      };
    case ActionType.GET_FIXTURES_SUCCESS:
      return {
        loading: false,
        fixtures: action.payload,
        error: null,
      };
    case ActionType.GET_FIXTURES_FAIL:
      return {
        loading: false,
        error: action.payload,
        fixtures: [],
      };
    default:
      return state;
  }
};

export default fixtureReducer;
