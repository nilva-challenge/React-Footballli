import { combineReducers } from "redux";
import fixtureReducer from "./index";

const reducers = combineReducers({
  fixtures: fixtureReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
