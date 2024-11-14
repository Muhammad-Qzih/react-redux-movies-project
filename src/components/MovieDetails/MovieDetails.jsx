import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../redux/actions/moviesActions";
import {
  ButtonContainer,
  CustomButton,
  MovieCardDetails,
  MovieDetailsText,
  MovieImage,
  MovieStoryCard,
  StoryText,
  StoryTitle,
  StyledRow,
} from "./MovieDetailsStyles";

const MovieDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieDetails(param.id));
  }, [dispatch, param.id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-10">
      <StyledRow>
        <MovieCardDetails className="d-flex">
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt="movie poster"
          />
          <div className="ml-auto">
            <MovieDetailsText>اسم الفيلم: {movie.title}</MovieDetailsText>
            <MovieDetailsText>
              تاريخ الفيلم: {movie.release_date}
            </MovieDetailsText>
            <MovieDetailsText>
              عدد المقيمين: {movie.vote_count}
            </MovieDetailsText>
            <MovieDetailsText>التقييم: {movie.vote_average}</MovieDetailsText>
          </div>
        </MovieCardDetails>
      </StyledRow>

      <StyledRow>
        <MovieStoryCard className="d-flex flex-column align-items-start">
          <StoryTitle>القصة:</StoryTitle>
          <StoryText>{movie.overview}</StoryText>
        </MovieStoryCard>
      </StyledRow>

      <StyledRow>
        <ButtonContainer md="10" xs="12" sm="12">
          <Link to="/">
            <CustomButton>عوده للرئيسيه</CustomButton>
          </Link>

          <a href={movie.homepage}>
            <CustomButton>مشاهدة الفيلم</CustomButton>
          </a>
        </ButtonContainer>
      </StyledRow>
    </div>
  );
};

export default MovieDetails;
