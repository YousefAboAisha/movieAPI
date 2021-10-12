import React, { useState, useContext } from "react";
import classes from "./filmCard.module.css";
import { GlobalState } from "../../Context/globalState";
import { Route, useHistory } from "react-router";
import MovieOverview from "../../Containers/movieOverview/movieOverview";

const FilmCard = ({ movie, type }) => {
  const {
    addMovieToWatchList,
    watchList,
    removeMovieFromWatchList,
    setID,
    id,
  } = useContext(GlobalState);

  const [showMore, setShowMore] = useState(false);

  const clickHandler = () => {
    setShowMore(!showMore);
  };

  const addToFav = (movie) => {
    addMovieToWatchList(movie);
  };

  const removeFromFav = (id) => {
    removeMovieFromWatchList(id);
  };

  let history = useHistory();

  const movieOverview = () => {
    setID(movie.id);
    history.push(`movies/movieOverview/id=${movie.id}`);
  };

  let storedMovies = watchList.find((elem) => elem.id === movie.id);

  const disabledBtn = storedMovies ? true : false;

  let card = (
    <div className={classes.card}>
      <img
        onClick={movieOverview}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : `https://sd.keepcalms.com/i/keep-calm-poster-not-found.png`
        }
        alt={`${movie.title} Poster`}
      />
      <div className={classes.text}>
        <h5>{movie.title ? movie.title : "unknown Name"}</h5>
        <p className={classes.details}>
          {showMore
            ? movie.overview
            : movie.overview.split(" ").slice(0, 12).join(" ")}
          {showMore ? (
            <span onClick={clickHandler}> Show Less</span>
          ) : (
            <span onClick={clickHandler}> Show More</span>
          )}
        </p>
      </div>
      <div className={classes.rate}>
        <span> {movie.vote_average} </span>
      </div>
      <abbr title="Add to favourite">
        <button onClick={() => addToFav(movie)} disabled={disabledBtn}>
          {disabledBtn ? "Added!" : "Add"}
        </button>
      </abbr>
    </div>
  );

  if (type === "favourite") {
    card = (
      <div className={classes.card2}>
        <img
          onClick={movieOverview}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : `https://sd.keepcalms.com/i/keep-calm-poster-not-found.png`
          }
          alt={`${movie.title} Poster`}
        />
        <div className={classes.btns}>
          <button onClick={() => removeFromFav(movie.id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Route path={`movies/movieOverview/${id}`} component={MovieOverview} />
      {card}
    </div>
  );
};

export default FilmCard;
