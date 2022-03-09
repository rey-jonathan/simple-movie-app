export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        myMovieList: [action.payload, ...state.myMovieList],
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        myMovieList: state.myMovieList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
