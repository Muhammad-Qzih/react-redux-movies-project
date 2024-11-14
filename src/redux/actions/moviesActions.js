import axios from "axios";
import {
  ALL_MOVIES,
  MOVIE_DETAILS,
  MOVIE_DETAILS_API,
  MOVIES_API,
  SEARCH_API,
} from "../types/moviesActionTypes";

const fetchDataM = (url) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(url);
      dispatch({
        type: ALL_MOVIES,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

const fetchMovieDetails = (url) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(url);
      dispatch({
        type: MOVIE_DETAILS,
        data: res.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const getAllMovies = () => {
  return fetchDataM(MOVIES_API);
};

export const getMoviesBySearch = (word) => {
  return fetchDataM(`${SEARCH_API}${word}`);
};

export const getPage = (pageNumber) => {
  return fetchDataM(`${MOVIES_API}&page=${pageNumber}`);
};

export const getMovieDetails = (id) => {
  return fetchMovieDetails(MOVIE_DETAILS_API(id));
};
