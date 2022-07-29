import { ThunkDispatch } from "redux-thunk";
import { ThunkAction } from "redux-thunk";
import { ActionType } from "../actionTypes/index";
import { AnyAction } from "redux";

export interface fixtureState {
  fixtures: any;
  loading: false;
  error: null;
}

export interface TAction {
  type: any;
  payload: any;
}

export type TActionCreator<T = void> = ThunkAction<
  T,
  fixtureState,
  {},
  TAction
>;

export type Dispatcher = ThunkDispatch<fixtureState, undefined, AnyAction>;

export type TDispatch = ThunkDispatch<fixtureState, {}, TAction>;
