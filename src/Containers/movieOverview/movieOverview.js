import React, { useContext, useState, useEffect } from "react";
import classes from "./movieOverview.module.css";
import { GlobalState } from "../../Context/globalState";

const MovieOverview = () => {
  const { id, setID } = useContext(GlobalState);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US
`)
      .then((res) => res.json())
      .then((data) => {
        setID(id);
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  let year = movie.release_date;

  console.log(movie);

  return (
    <div className={classes.overview}>
      <div className={classes.img}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : `https://sd.keepcalms.com/i/keep-calm-poster-not-found.png`
          }
          alt={`${movie.title} Poster`}
        />
      </div>

      <hr />
      <div className={classes.details}>
        <h3>
          {movie.title ? movie.title : "Unknown Title"} (
          {year ? year : "Release year is not found "})
        </h3>
        <h3>
          <i className="fas fa-info-circle"></i>Movie Overview :
        </h3>
        <p>{movie.overview}</p>

        <div className={classes.summary}>
          <div>
            <span>Status</span> <span>{movie.status}</span>
          </div>
          <div>
            <span>Duration</span> <span>{movie.runtime} minutes</span>
          </div>
          <div>
            <span>Languages</span>
            {movie.spoken_languages
              ? movie.spoken_languages.map((lang, index) => {
                  return (
                    <span key={index} className={classes.langs}>
                      {lang.english_name}
                    </span>
                  );
                })
              : null}
          </div>
          <div>
            <span>Rate</span> <span> {movie.vote_average}</span>
          </div>
          <div>
            <span>Budget</span>{" "}
            <span>
              {movie.budget === 0 || movie.budget == null
                ? "Budjet not found"
                : movie.budget + " $"}
            </span>
          </div>
          <div>
            <span>Production countries</span>
            {movie.production_countries
              ? movie.production_countries.map((cntry, index) => {
                  return (
                    <span key={index} className={classes.langs}>
                      {cntry.name}
                    </span>
                  );
                })
              : null}
          </div>

          <div>
            <span>Production companies</span>
            {movie.production_companies
              ? movie.production_companies.map((company, index) => {
                  return (
                    <span key={index} className={classes.langs}>
                      {company.name}
                    </span>
                  );
                })
              : null}
          </div>

          <div>
            <span>Key words</span>
            {movie.genres
              ? movie.genres.map((type, index) => {
                  return (
                    <span key={index} className={classes.langs}>
                      {type.name}
                    </span>
                  );
                })
              : null}
          </div>
        </div>
        <div className={classes.btn}>
          <a href={movie.homepage} target="_blank">
            <button>
              Click here to watch <i className="far fa-play-circle"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieOverview;
