const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCH_LIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };

    case "REMOVE_MOVIE_TO_WATCH_LIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "SET_ID":
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
