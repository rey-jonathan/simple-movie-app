// import library
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import context
import { GlobalContext } from "../context/GlobalState";

//import styled
import {
  Image,
  Metadata,
  ButtonRemove,
  MovieContainer,
  ButtonBack,
  ButtonDetail,
} from "./styled";

const MovieDetail = ({ movieID }) => {
  const { addMovie, deleteMovie, myMovieList } = useContext(GlobalContext);

  const [movieDetail, setMovieDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  /**
   * @desc Function to get movie detail from OMDB API, takes 1 param
   * @param {movieID} - string
   * @returns JSON details of movie
   */
  const findMovieDetail = async (movieID) => {
    const url = `http://www.omdbapi.com/?i=${movieID}&apikey=9fd56b29`;

    await axios.get(url).then((res) => {
      setMovieDetail(res.data);
      setIsLoading(false);
    });
  };

  /**
   * @desc Trigger findMovieDetail() function when movieID state is changed
   */
  useEffect(() => {
    if (movieID) findMovieDetail(movieID);
  }, [movieID]);

  // check if movie is on the list
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
        <ButtonDetail
          disabled={checkMovie}
          onClick={() => addMovie(movieDetail)}
        >
          Add to list
        </ButtonDetail>
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <div style={{ color: "white" }}>Loading...</div>
      ) : (
        <>
          <MovieContainer>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              toastStyle={{ backgroundColor: "black", color: "white" }}
            />
            <Image
              src={movieDetail.Poster}
              style={{ height: "300px" }}
              alt={movieDetail.Title}
            ></Image>
            <Metadata>
              <h3>{movieDetail.Title}</h3>
              <h3>{movieDetail.Year}</h3>
              <p>{movieDetail.Plot}</p>
              <p>{movieDetail.Actors}</p>
            </Metadata>
          </MovieContainer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/">
              <ButtonBack style={{ marginRight: "10px" }}>Back</ButtonBack>
            </Link>
            {buttonLogic()}
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetail;
