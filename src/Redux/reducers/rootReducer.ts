import { combineReducers } from "redux";
import { fetchDataReducer } from "./fetchDataReducer";
import { tabsReducer } from './tabsReducer';
export const Reducer = combineReducers({ fetchDataReducer, tabsReducer });
