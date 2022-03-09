import { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const MyMovie = (props) => {
  const { deleteMovie, myMovieList } = useContext(GlobalContext);

  const handleClick = (event) => {
    props.movie(event);
  };

  console.log(myMovieList);

  return (
    <div>
      My Movie List
      {myMovieList.length > 0 ? (
        myMovieList.map((movie, id) => (
          <div key={id} style={{ display: "flex" }}>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
              <h3>{movie.Title}</h3>
              <h4>{movie.type}</h4>
              <h5>{movie.year}</h5>
            </div>
            <div>
              <button onClick={() => handleClick(movie)}>
                <Link to='movie-detail'>View Detail</Link>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No Movies</div>
      )}
    </div>
  );
};

export default MyMovie;
