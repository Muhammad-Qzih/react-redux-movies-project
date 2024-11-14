import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../redux/actions/moviesActions";

import UsePagenation from "../UsePagenation";
import { NoMoviesMessage, StyledRow } from "./MoviesListStyles";
import MovieCard from "../MovieCardComponent/MovieCard";


const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getAllMovies());
  }, [dispatch]);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  if (!movies || movies.length === 0) {
    return <p>No movies available.</p>; 
  }
  return (
    <StyledRow>
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })
      ) : (
        <NoMoviesMessage>لا يوجد افلام لعرضها....</NoMoviesMessage>
      )}
      <UsePagenation />
    </StyledRow>
  );
};

export default MoviesList;
