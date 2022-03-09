import { useState } from "react";
import { Link } from "react-router-dom";

import MovieDetail from "./MovieDetail";

const MovieList = (props) => {
  const handleClick = (event) => {
    props.movie(event);
  };

  return (
    <>
      <div>Movie List</div>
      {props.movies
        ? props.movies.map((movie, id) => (
            <div key={id} style={{ display: "flex" }}>
              <img src={movie.Poster} alt={movie.Title} />
              <div>
                <h3>{movie.Title}</h3>
                <h4>{movie.type}</h4>
                <h5>{movie.year}</h5>
              </div>
              <div>
                <button onClick={() => handleClick(movie)}>
                  <Link to='movie-detail'>View Detail</Link>
                </button>
              </div>
            </div>
          ))
        : ""}
    </>
  );
};

export default MovieList;
