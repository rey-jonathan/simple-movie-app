import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import MovieDetail from "./MovieDetail";

const MovieList = (props) => {
  const TitleMenu = styled.div`
    text-align: center;
    font-size: 24px;
    color: #ffffff;
  `;

  const MovieContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0 10px;
    color: white;
    padding: 10px;

    @media (min-width: 412px;) {
    }
  `;

  const Movie = styled.div`
    flex: 50%;
    width: 100%;
  `;

  const Image = styled.img`
    width: 100px;
  `;

  const Metadata = styled.div`
    margin-left: 10px;
    color: #ffffff;
  `;

  const handleClick = (event) => {
    props.movie(event.imdbID);
  };

  return (
    <>
      <TitleMenu>Movie List</TitleMenu>
      {props.movies
        ? props.movies.map((movie, id) => (
            <MovieContainer key={id}>
              <Image src={movie.Poster} alt={movie.Title} />
              <Metadata>
                <h3>{movie.Title}</h3>
                <h4>Type: {movie.Type}</h4>
                <h5>Year: {movie.Year}</h5>
              </Metadata>
              <div>
                <Link to='movie-detail'>
                  <button onClick={() => handleClick(movie)}>
                    View Detail
                  </button>
                </Link>
              </div>
            </MovieContainer>
          ))
        : ""}
    </>
  );
};

export default MovieList;
