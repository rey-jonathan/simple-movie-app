import { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const MovieDetail = ({ detail }) => {
  const { addMovie, deleteMovie, myMovieList } = useContext(GlobalContext);

  let storedMovie = myMovieList.find((o) => o.id === detail.id);

  const checkMovie = storedMovie ? true : false;

  const buttonLogic = () => {
    if (
      window.location.pathname === "/my-movie/movie-detail" &&
      storedMovie.length > 0
    ) {
      return (
        <div>
          <button onClick={() => deleteMovie(detail.id)}>Remove</button>
        </div>
      );
    } else {
      return (
        <div>
          <button disabled={checkMovie} onClick={() => addMovie(detail)}>
            Add to list
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div>
        <img src={detail.Poster} alt={detail.title}></img>
        <h3>{detail.Title}</h3>
        Movie Detail
      </div>
      <button>
        <Link to='/'>Back</Link>
      </button>
      {buttonLogic()}
    </>
  );
};

export default MovieDetail;
