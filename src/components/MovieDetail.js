import { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const MovieDetail = ({ detail }) => {
  const { addMovie, deleteMovie, myMovieList } = useContext(GlobalContext);

  let storedMovie = myMovieList.find((o) => o.id === detail.id);

  const checkMovie = storedMovie ? true : false;

  const buttonLogic = () => {
    if (window.location.pathname === "/my-movie/movie-detail") {
      return <button onClick={() => deleteMovie(detail.id)}>Remove</button>;
    } else {
      return (
        <button disabled={checkMovie} onClick={() => addMovie(detail)}>
          Add to list
        </button>
      );
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          src={detail.Poster}
          style={{ height: "300px" }}
          alt={detail.title}
        ></img>
        <div style={{ marginLeft: "10px" }}>
          <h3>{detail.Title}</h3>
          <h3>{detail.year}</h3>
          <p>{detail.description}</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to='/'>
          <button style={{ marginRight: "10px" }}>Back</button>
        </Link>
        {buttonLogic()}
      </div>
    </>
  );
};

export default MovieDetail;
