import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./appReducer";

// Initial state
const initialState = {
  watchList: JSON.parse(localStorage.getItem("watchList")) || [],
  watched: JSON.parse(localStorage.getItem("watched")) || [],
  id: "",
};

// Create Context
export const GlobalState = createContext(initialState);

// Provider Components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_TO_WATCH_LIST", payload: id });
  };

  const setID = (id) => {
    dispatch({ type: "SET_ID", payload: id });
  };

  return (
    <GlobalState.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchList,
        id: state.id,
        setID,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};
