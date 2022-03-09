import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { GlobalContext } from "../context/GlobalState";

const MyMovie = (props) => {
  const Header = styled.div`
    margin: 10px 0;
    text-align: center;
    font-size: 24px;
  `;

  const Button = styled.button`
    width: 150px;
    height: 35px;
    border-radius: 5px;
  `;

  const { deleteMovie, myMovieList } = useContext(GlobalContext);

  const handleClick = (event) => {
    props.movie(event);
  };

  return (
    <div>
      <Header>My Movie List</Header>
      {myMovieList.length > 0 ? (
        myMovieList.map((movie, id) => (
          <>
            <div key={id} style={{ display: "flex" }}>
              <img
                src={movie.Poster}
                style={{ height: "300px" }}
                alt={movie.title}
              ></img>
              <div style={{ marginLeft: "10px" }}>
                <h3>{movie.Title}</h3>
                <h3>{movie.year}</h3>
                <p>{movie.description}</p>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Link to='movie-detail'>
                <Button onClick={() => handleClick(movie)}>View Detail</Button>
              </Link>
            </div>
          </>
        ))
      ) : (
        <Header>No Movies</Header>
      )}
    </div>
  );
};

export default MyMovie;
