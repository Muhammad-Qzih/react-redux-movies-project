import { ALL_MOVIES, MOVIE_DETAILS } from "../../types/moviesActionTypes";

const initialStateValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = initialStateValue, action) => {
  switch (action.type) {
    case ALL_MOVIES:
      return {movies:action.data, pageCount: action.pages};

    case MOVIE_DETAILS:
      return {movie:action.data};
      
    default:
      return state;
  }
};
