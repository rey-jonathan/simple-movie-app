import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";

import { GlobalContext } from "../context/GlobalState";

const MovieDetail = ({ movieID }) => {
  const ButtonRemove = styled.button`
    background-color: red;
    border-radius: 10px;
    width: 100px;
    height: 35px;
  `;

  const Content = styled.div`
    color: #ffffff;
  `;

  const { addMovie, deleteMovie, myMovieList } = useContext(GlobalContext);

  const [movieDetail, setMovieDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const findMovieDetail = async (movieID) => {
    const url = `http://www.omdbapi.com/?i=${movieID}&apikey=9fd56b29`;

    await axios.get(url).then((res) => {
      setMovieDetail(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (movieID) findMovieDetail(movieID);
  }, [movieID]);

  let storedMovie = movieDetail
    ? myMovieList.find((o) => o.imdbID === movieDetail.imdbID)
    : "";

  const checkMovie = storedMovie ? true : false;

  const buttonLogic = () => {
    if (window.location.pathname === "/my-movie/movie-detail") {
      return (
        <ButtonRemove onClick={() => deleteMovie(movieDetail.imdbID)}>
          Remove
        </ButtonRemove>
      );
    } else {
      return (
        <button disabled={checkMovie} onClick={() => addMovie(movieDetail)}>
          Add to list
        </button>
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <div style={{ color: "white" }}>Loading...</div>
      ) : (
        <>
          <div style={{ display: "flex" }}>
            <img
              src={movieDetail.Poster}
              style={{ height: "300px" }}
              alt={movieDetail.Title}
            ></img>
            <Content style={{ marginLeft: "10px" }}>
              <h3>{movieDetail.Title}</h3>
              <h3>{movieDetail.Year}</h3>
              <p>{movieDetail.Plot}</p>
            </Content>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to='/'>
              <button style={{ marginRight: "10px" }}>Back</button>
            </Link>
            {buttonLogic()}
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetail;
