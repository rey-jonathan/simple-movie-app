export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        myMovieList: [action.payload, ...state.myMovieList],
      };
    default:
      return state;
  }
};
