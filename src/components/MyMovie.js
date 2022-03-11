import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { GlobalContext } from "../context/GlobalState";

const MyMovie = (props) => {
  const Header = styled.div`
    margin: 10px 0;
    text-align: center;
    font-size: 24px;
    color: white;
  `;

  const Button = styled.button`
    width: 150px;
    height: 35px;
    border-radius: 5px;
  `;

  const Container = styled.div`
    /* background: black; */
  `;

  const { myMovieList } = useContext(GlobalContext);

  const handleClick = (event) => {
    props.movie(event);
    console.log(event);
  };

  return (
    <Container>
      <Header>My Movie List</Header>
      {myMovieList.length > 0 ? (
        myMovieList.map((movie, imdbID) => (
          <>
            <div
              key={imdbID}
              style={{ display: "flex", color: "white", width: "50%" }}
            >
              <img
                src={movie.Poster}
                style={{ height: "300px" }}
                alt={movie.title}
              ></img>
              <div style={{ marginLeft: "10px", color: "white" }}>
                <h3>{movie.Title}</h3>
                <h3>{movie.Year}</h3>
                <p>{movie.Plot}</p>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Link to='movie-detail'>
                <Button onClick={() => handleClick(movie.imdbID)}>
                  View Detail
                </Button>
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
