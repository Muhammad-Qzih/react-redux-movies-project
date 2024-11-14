import { combineReducers } from "redux";
import { moviesReducer } from "./reducers/movieReducer";

export const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
});
