// import library
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

// import provider
import { GlobalProvider } from "./context/GlobalState";

// import global styles
import "./App.css";

// import component
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MyMovie from "./components/MyMovie";
import MovieDetail from "./components/MovieDetail";

import { MenuBar } from "./components/styled";

function App() {
  //state
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [searchedMovie, setSearchedMovie] = useState();
  const [totalResults, setTotalResults] = useState(0);
  const [selectedMovieID, setSelectedMovieID] = useState();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  /**
   * @desc Function to get movie list from OMDB API, takes 2 param
   * @param {searchTerm} - string
   * @param {page} - number, for pagination purpose, because OMDB only return 10 movies data each page
   * @returns JSON list of movies, save it to state
   */
  const findMovies = async (searchTerm, page) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=9fd56b29&page=${page}`;

    await axios
      .get(url)
      .then((res) => {
        setSearchedMovie(res.data.Search);
        setTotalResults(res.data.totalResults);
        setTotalPage(Math.ceil(res.data.totalResults / 10));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /**
   * @desc Trigger findMovies() function when searchTerm or page changes
   */
  useEffect(() => {
    setLoading(true);
    if (searchTerm || page > 0) findMovies(searchTerm, page);
  }, [searchTerm, page]);

  return (
    <GlobalProvider>
      <Router>
        <MenuBar>
          <label>
            <Link style={{ color: "white", fontSize: "20px" }} to="/">
              Movie List
            </Link>
          </label>
          <label>
            <Link style={{ color: "white", fontSize: "20px" }} to="/my-movie">
              My Movie
            </Link>
          </label>
        </MenuBar>

        <Routes>
          <Route
            exact
            path="*"
            element={
              <>
                <SearchBar
                  searchTerm={searchTerm}
                  inputHandler={(value) => setSearchTerm(value)}
                />
                <MovieList
                  movies={searchedMovie ? searchedMovie : ""}
                  movie={(value) => setSelectedMovieID(value)}
                  onClickNext={() => setPage(page + 1)}
                  onClickBack={() => setPage(page === 1 ? 1 : page - 1)} // to prevent number become 0
                  currentPage={page}
                  totalPage={totalPage}
                  totalResults={totalResults}
                />
              </>
            }
          />
          <Route
            path="my-movie"
            element={<MyMovie movie={(value) => setSelectedMovieID(value)} />}
          />
          <Route
            path="movie-detail"
            element={<MovieDetail movieID={selectedMovieID} />}
          />
          <Route
            path="my-movie/movie-detail"
            element={<MovieDetail movieID={selectedMovieID} />}
          />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
