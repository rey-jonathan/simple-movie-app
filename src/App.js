import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import { GlobalProvider } from "./context/GlobalState";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MyMovie from "./components/MyMovie";
import MovieDetail from "./components/MovieDetail";

import poster1 from "./assets/1.jpg";
import poster2 from "./assets/2.jpg";
import poster3 from "./assets/3.jpg";

function App() {
  const dummy = [
    {
      id: 1,
      Title: "Ninja 1",
      type: "horror",
      year: "2012",
      Poster: { poster1 },
    },
    {
      id: 2,
      Title: "Ninja 2",
      type: "horror",
      year: "2012",
      Poster: { poster2 },
    },
    {
      id: 3,
      Title: "Ninja 3",
      type: "horror",
      year: "2012",
      Poster: { poster3 },
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovie, setSearchedMovie] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  const findMovies = async (searchTerm) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=9fd56b29&t=${searchTerm}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSearchedMovie(data.Search);
        }
      });
  };

  useEffect(() => {
    if (searchTerm) findMovies(searchTerm);

    return null;
  }, [searchTerm]);

  return (
    <GlobalProvider>
      <Router>
        <div>
          <label>
            <Link to='/'>Movie List</Link>
          </label>
          <label>
            <Link to='/my-movie'>My Movie</Link>
          </label>
        </div>

        <Routes>
          <Route
            exact
            path='*'
            element={
              <>
                <div>
                  <SearchBar
                    searchTerm={searchTerm}
                    inputHandler={(value) => setSearchTerm(value)}
                  />
                  <MovieList
                    movies={dummy}
                    movie={(value) => setSelectedMovie(value)}
                  />
                </div>
              </>
            }
          />
          <Route path='my-movie' element={<MyMovie />} />
          <Route
            path='movie-detail'
            element={<MovieDetail detail={selectedMovie} />}
          />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
