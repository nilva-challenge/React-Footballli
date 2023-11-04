import { createStore } from "redux";

import DateTimeReducer from "../reducers/DateTimeReducer";

let store = createStore(DateTimeReducer);

export default store;
