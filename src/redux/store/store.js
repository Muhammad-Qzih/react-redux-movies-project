import { applyMiddleware, createStore } from "redux";
import { moviesReducer } from "../reducer/reducers/movieReducer";
import { thunk } from "redux-thunk";

export const store = createStore(moviesReducer, applyMiddleware(thunk));
