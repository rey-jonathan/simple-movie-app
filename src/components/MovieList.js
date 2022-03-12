// import library
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// import styled
import { ButtonDetail, Image } from "./styled";

// import images/assets
import placeholder from "../assets/placeholder.png";

/**
 * @desc Display list of movies after enter search value
 */
const MovieList = (props) => {
  const TitleMenu = styled.div`
    text-align: center;
    font-size: 30px;
    color: #ffffff;
    font-weight: 300;
  `;

  const MovieContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    color: white;
    padding: 15px;
    flex-direction: column;

    @media (max-width: 420px) {
      width: 85%;
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `;

  const Metadata = styled.div`
    color: #ffffff;
    text-align: left;

    @media (min-width: 500px) {
      width: 360px;
      text-align: center;
    }

    @media (min-width: 768px) {
      width: 350px;
    } ;
  `;

  const ButtonContainer = styled.div`
    margin: auto;

    @media (min-width: 1200px) {
      padding-top: 25px;
    }
  `;

  const NavButton = styled.div`
    margin: 10px auto;
    text-align: center;

    & > button {
      margin: 0 10px;
    }
  `;

  /**
   * @desc Function to handle callback, and passed it to parent component (App)
   * @param {event} - object
   */
  const handleClick = (event) => {
    props.movie(event.imdbID);
  };

  const onClickNext = () => {
    props.onClickNext();
  };

  const onClickBack = () => {
    props.onClickBack();
  };

  return (
    <>
      <TitleMenu>Movie List</TitleMenu>
      {props.movies ? (
        <>
          <NavButton>
            <button disabled={props.currentPage === 1} onClick={onClickBack}>
              Back
            </button>
            <span style={{ color: "white" }}>{props.currentPage}</span>
            <button
              disabled={props.currentPage === props.totalPage}
              onClick={onClickNext}
            >
              Next
            </button>
          </NavButton>
          <div
            style={{ color: "white", textAlign: "center", fontWeight: "300" }}
          >
            Results: {props.totalResults}
          </div>
        </>
      ) : (
        ""
      )}
      {props.movies
        ? props.movies.map((movie, id) => (
            <MovieContainer key={id}>
              <Image
                src={movie.Poster === "N/A" ? placeholder : movie.Poster} //add placeholder if poster return N/A
                alt={movie.Title}
                width="250px"
              />
              <Metadata>
                <h3>{movie.Title}</h3>
                <h4>Type: {movie.Type}</h4>
                <h4>Year: {movie.Year}</h4>
              </Metadata>
              <ButtonContainer>
                <Link to="movie-detail">
                  <ButtonDetail onClick={() => handleClick(movie)}>
                    View Detail
                  </ButtonDetail>
                </Link>
              </ButtonContainer>
            </MovieContainer>
          ))
        : ""}
    </>
  );
};

export default MovieList;
