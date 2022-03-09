import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import MovieDetail from "./MovieDetail";

const MovieList = (props) => {
  const TitleMenu = styled.div`
    text-align: center;
  `;

  const MovieContainer = styled.div`
    align-items: center;
    display: flex;
    margin: 20px 0 0 10px;
  `;

  const Image = styled.img`
    width: 100px;
  `;

  const Metadata = styled.div`
    margin-left: 10px;
  `;

  const handleClick = (event) => {
    props.movie(event);
  };

  return (
    <>
      <TitleMenu>Movie List</TitleMenu>
      {props.movies
        ? props.movies.map((movie, id) => (
            <MovieContainer key={id} style={{ display: "flex" }}>
              <Image src={movie.Poster} alt={movie.Title} />
              <Metadata>
                <h3>{movie.Title}</h3>
                <h4>{movie.type}</h4>
                <h5>{movie.year}</h5>
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
