import { DataType } from "../../types";
import {
  FETCH_DATA_FAIL,
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FILTERED_DATA,
  FetchDataDispatchType,
} from "../actions/fetchActionTypes";

interface FetchDataTypes {
  data: DataType[];
  filteredLeagueData: DataType[];
  filteredCompetitionData: any;
  loading: boolean;
}

const initialState = {
  data: [],
  filteredLeagueData: [],
  filteredCompetitionData: [],
  loading: false,
};

export const fetchDataReducer = (
  state: FetchDataTypes = initialState,
  action: FetchDataDispatchType
): FetchDataTypes => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return { ...state, loading: true };
    case FETCH_DATA_FAIL:
      return { ...state, loading: false };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        filteredLeagueData: action.payload,
        filteredCompetitionData: action.payload,
        loading: false,
      };
    case FILTERED_DATA:
      let filteredLeagueDataArray = state.data.filter((item) =>
        item.name.includes(action.payload)
      );

      let filteredCompetitionDataArray = state.data.filter((item) => {
        return item.fixtures.some(
          (i) =>
            i.away.name.includes(action.payload) ||
            i.home.name.includes(action.payload)
        );
      });
      return {
        ...state,
        filteredLeagueData: filteredLeagueDataArray,
        filteredCompetitionData: filteredCompetitionDataArray,
      };
    default:
      return state;
  }
};
