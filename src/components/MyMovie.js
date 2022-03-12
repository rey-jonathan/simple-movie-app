// import library
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// import context
import { GlobalContext } from "../context/GlobalState";

// import styled
import { ButtonDetail, Image, Metadata, MovieContainer } from "./styled";

/**
 * @desc Function to show list of movie that has been added to my list
 */
const MyMovie = (props) => {
  const TitleMenu = styled.div`
    text-align: center;
    font-size: 30px;
    color: #ffffff;
    font-weight: 300;
    padding-top: 15px;
  `;

  // get list of movies that has been added to movie list
  const { myMovieList } = useContext(GlobalContext);

  /**
   * @desc Function to handle callback, and passed it to parent component (App)
   * @param {event} - object
   */
  const handleClick = (event) => {
    props.movie(event);
  };

  return (
    <>
      <TitleMenu>My Movie List</TitleMenu>
      {myMovieList.length > 0 ? (
        myMovieList.map((movie, imdbID) => (
          <>
            <MovieContainer key={imdbID}>
              <Image
                src={movie.Poster}
                style={{ height: "215px" }}
                alt={movie.title}
              ></Image>
              <Metadata>
                <h3>{movie.Title}</h3>
                <h3>{movie.Year}</h3>
              </Metadata>
            </MovieContainer>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Link to="movie-detail">
                <ButtonDetail onClick={() => handleClick(movie.imdbID)}>
                  View Detail
                </ButtonDetail>
              </Link>
            </div>
          </>
        ))
      ) : (
        <TitleMenu>No Movies</TitleMenu>
      )}
    </>
  );
};

export default MyMovie;
