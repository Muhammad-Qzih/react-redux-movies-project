import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImage, CardOverlay, OverlayText, StyledCol } from "./MovieCardStyles";

const MovieCard = ({ movie }) => {
  return (
    <StyledCol xs={6} sm={6} md={4} lg={3} className="my-1">
      <Link to={`movie/${movie.id}`}>
        <Card>
          <CardImage
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt="hu"
          />
          <CardOverlay>
            <OverlayText>
              <p>اسم الفيلم : {movie.name}</p>
              <p>تاريخ الاصدار: {movie.release_date}</p>
              <p>عدد المقيمين: {movie.vote_count}</p>
              <p>التقييم: {movie.vote_average}</p>
            </OverlayText>
          </CardOverlay>
        </Card>
      </Link>
    </StyledCol>
  );
};

export default MovieCard;
