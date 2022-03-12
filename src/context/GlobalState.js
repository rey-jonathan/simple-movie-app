// import library
import { createContext, useReducer, useEffect } from "react";

// import Reducer
import AppReducer from "./AppReducer";

// initialize state
const initialState = {
  myMovieList: localStorage.getItem("myMovieList")
    ? JSON.parse(localStorage.getItem("myMovieList"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  /**
   * @desc Save list of movies that has been added to My Movie List to localStorage
   * localstorage act as a temporary persistent data, so My Movie List won't be deleted after user reload
   */
  useEffect(() => {
    localStorage.setItem("myMovieList", JSON.stringify(state.myMovieList));
  }, [state]);

  //dispatch action to save movie data when user click "Add to List" button
  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  //dispatch action to remove movie from My Movie List, based on movieID / omdbID
  const deleteMovie = (id) => {
    dispatch({ type: "DELETE_MOVIE", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        myMovieList: state.myMovieList,
        addMovie,
        deleteMovie,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
