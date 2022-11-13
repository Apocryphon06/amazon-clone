import { combineReducers } from "redux";
import TestReducer from "./TestReducer";

const allReducers = combineReducers({
  test: TestReducer,
});

export default allReducers;
