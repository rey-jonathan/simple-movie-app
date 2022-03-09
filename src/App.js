import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";

import { GlobalProvider } from "./context/GlobalState";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MyMovie from "./components/MyMovie";
import MovieDetail from "./components/MovieDetail";

function App() {
  const MenuBar = styled.div`
    text-align: center;

    & > label {
      color: black;

      :active {
        color: red;
      }

      :visited {
        color: black;
      }
    }

    & > label > :nth-of-type(1) {
      margin-right: 10px;
    }
  `;

  const dummy = [
    {
      id: 1,
      Title: "Ninja 1",
      type: "horror",
      year: "2012",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmVkNjVjZTQtNTczYS00ODk5LWFkNjItYjNlMDc5ZjMyYTQwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id diam vitae nulla euismod maximus. Cras rutrum vehicula consequat. Maecenas lectus magna, suscipit a euismod quis, cursus eu ante. Aenean tempus ex sed pellentesque congue. Maecenas placerat pretium elit et accumsan. Donec porta faucibus dui a luctus. Sed nec lacus lorem. In ut mattis elit. Mauris aliquam ultricies dolor, id blandit nibh egestas sed. Sed faucibus condimentum porttitor. Praesent placerat eu neque sed fermentum. Mauris vel libero vitae ligula commodo condimentum ut et arcu",
    },
    {
      id: 2,
      Title: "Ninja 2",
      type: "horror",
      year: "2012",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzg3NTQ4NDk5NV5BMl5BanBnXkFtZTgwNzMzNDg4NjE@._V1_SX300.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id diam vitae nulla euismod maximus. Cras rutrum vehicula consequat. Maecenas lectus magna, suscipit a euismod quis, cursus eu ante. Aenean tempus ex sed pellentesque congue. Maecenas placerat pretium elit et accumsan. Donec porta faucibus dui a luctus. Sed nec lacus lorem. In ut mattis elit. Mauris aliquam ultricies dolor, id blandit nibh egestas sed. Sed faucibus condimentum porttitor. Praesent placerat eu neque sed fermentum. Mauris vel libero vitae ligula commodo condimentum ut et arcu",
    },
    {
      id: 3,
      Title: "Ninja 3",
      type: "horror",
      year: "2012",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjUzODQ5MDY5NV5BMl5BanBnXkFtZTgwOTc1NzcyMjE@._V1_SX300.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id diam vitae nulla euismod maximus. Cras rutrum vehicula consequat. Maecenas lectus magna, suscipit a euismod quis, cursus eu ante. Aenean tempus ex sed pellentesque congue. Maecenas placerat pretium elit et accumsan. Donec porta faucibus dui a luctus. Sed nec lacus lorem. In ut mattis elit. Mauris aliquam ultricies dolor, id blandit nibh egestas sed. Sed faucibus condimentum porttitor. Praesent placerat eu neque sed fermentum. Mauris vel libero vitae ligula commodo condimentum ut et arcu",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovie, setSearchedMovie] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  const findMovies = async (searchTerm) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=9fd56b29`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSearchedMovie(data.Search);
        }
      });
  };

  useEffect(() => {
    // if (searchTerm) findMovies(searchTerm);
    if (searchTerm) console.log(searchTerm);
  }, [searchTerm]);

  return (
    <GlobalProvider>
      <Router>
        <MenuBar>
          <label>
            <Link to='/'>Movie List</Link>
          </label>
          <label>
            <Link to='/my-movie'>My Movie</Link>
          </label>
        </MenuBar>

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
          <Route
            path='my-movie'
            element={<MyMovie movie={(value) => setSelectedMovie(value)} />}
          />
          <Route
            path='movie-detail'
            element={<MovieDetail detail={selectedMovie} />}
          />
          <Route
            path='my-movie/movie-detail'
            element={<MovieDetail detail={selectedMovie} />}
          />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
