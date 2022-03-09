import { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const MovieDetail = ({ detail }) => {
  const { addMovie, deleteMovie, myMovieList } = useContext(GlobalContext);

  let storedMovie = myMovieList.find((o) => o.id === detail.id);

  const checkMovie = storedMovie ? true : false;

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
      {checkMovie ? (
        <button onClick={() => addMovie(detail)}>Remove</button>
      ) : (
        <button onClick={() => addMovie(detail)}>Add to list</button>
      )}
    </>
  );
};

export default MovieDetail;
