export const ALL_MOVIES = "ALLMOVIES";
export const MOVIE_DETAILS = "MOVIE_DETAILS";
export const ALL_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=51ab53601bcafd99b8be945a86682ab8&include_adult=false&language=ar&page=1";

const API_KEY = "51ab53601bcafd99b8be945a86682ab8";
const BASE_URL = "https://api.themoviedb.org/3";

export const MOVIES_API = `${BASE_URL}/movie/popular?api_key=${API_KEY}&include_adult=false&language=ar`;
export const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ar&query=`;
export const MOVIE_DETAILS_API = (id) =>`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ar`;