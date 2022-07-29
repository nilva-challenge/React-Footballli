import { ThunkDispatch } from "redux-thunk";
import {
  TAction,
  fixtureState as TReduxStore,
} from "../../../core/redux/reducers/types";

export interface Props {
  className?: string;
  fontSize?: any;
  active?: boolean;
  children: any;
  onClick: any;
}

export type TDispatch = ThunkDispatch<TReduxStore, {}, TAction>;
