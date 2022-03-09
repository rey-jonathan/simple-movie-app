import { createContext, useReducer, useEffect } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  myMovieList: localStorage.getItem("myMovieList")
    ? JSON.parse(localStorage.getItem("myMovieList"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("myMovieList", JSON.stringify(state.myMovieList));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

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
