import { DataType } from "../../types";

export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FILTERED_DATA = "FILTERED_DATA";

interface FetchDataLoading {
  type: typeof FETCH_DATA_LOADING;
}
interface FetchDataFail {
  type: typeof FETCH_DATA_FAIL;
}

interface FetchDataSuccess {
  type: typeof FETCH_DATA_SUCCESS;
  payload: DataType[];
}
interface FilteredData {
  type: typeof FILTERED_DATA;
  payload: string;
}

export type FetchDataDispatchType =
  | FetchDataLoading
  | FetchDataFail
  | FetchDataSuccess
  | FilteredData;
