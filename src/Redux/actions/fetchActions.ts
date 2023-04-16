import { Dispatch } from "redux";
import axios from "axios";
import {
  FETCH_DATA_FAIL,
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FILTERED_DATA,
  FetchDataDispatchType,
} from "./fetchActionTypes";

export const getData = (param: string) => {
  return async (dispatch: Dispatch<FetchDataDispatchType>) => {
    try {
      dispatch({
        type: FETCH_DATA_LOADING,
      });
      const response = await axios.get(
        `https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${param}`
      );
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: response.data.all,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAIL,
      });
    }
  };
};

export const filterdData = (param: string) => {
  return {
    type: FILTERED_DATA,
    payload: param,
  };
};
