// import library
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// import context
import { GlobalContext } from "../context/GlobalState";

// import styled
import { ButtonDetail, Image } from "./styled";

/**
 * @desc Function to show list of movie that has been added to my list
 */
const MyMovie = (props) => {
  const Header = styled.div`
    margin: 10px 0;
    text-align: center;
    font-size: 24px;
    color: white;
  `;

  const Container = styled.div`
    width: 50%;
    margin: auto;

    @media (max-width: 640px) {
      width: 100%;
    }
  `;

  const MovieContainer = styled.div`
    display: flex;
    color: white;
    width: 85%;
    margin: auto;
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
    <Container>
      <Header>My Movie List</Header>
      {myMovieList.length > 0 ? (
        myMovieList.map((movie, imdbID) => (
          <>
            <MovieContainer key={imdbID}>
              <Image
                src={movie.Poster}
                style={{ height: "215px" }}
                alt={movie.title}
              ></Image>
              <div style={{ color: "white", margin: "auto auto auto 30px" }}>
                <h3>{movie.Title}</h3>
                <h3>{movie.Year}</h3>
              </div>
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
        <Header>No Movies</Header>
      )}
    </Container>
  );
};

export default MyMovie;
