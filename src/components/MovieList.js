import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import placeholder from "../assets/placeholder.png";

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
    width: 50%;
    flex-direction: column;

    @media (max-width: 420px) {
      width: 85%;
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `;

  const Image = styled.img`
    width: 250px;
    margin-right: 10px;

    @media (min-width: 500px) {
      margin: auto;
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
      ) : (
        ""
      )}
      {props.movies
        ? props.movies.map((movie, id) => (
            <MovieContainer key={id}>
              <Image
                src={movie.Poster === "N/A" ? placeholder : movie.Poster}
                alt={movie.Title}
              />
              <Metadata>
                <h3>{movie.Title}</h3>
                <h4>Type: {movie.Type}</h4>
                <h4>Year: {movie.Year}</h4>
              </Metadata>
              <ButtonContainer>
                <Link to='movie-detail'>
                  <button
                    style={{
                      border: "1px solid pink",
                      background: "pink",
                      width: "150px",
                      color: "white",
                    }}
                    onClick={() => handleClick(movie)}
                  >
                    View Detail
                  </button>
                </Link>
              </ButtonContainer>
            </MovieContainer>
          ))
        : ""}
    </>
  );
};

export default MovieList;
