import React, { useState } from "react";
import classes from "./movies.module.css";
import FilmCard from "../../Components/film card/filmCard";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else setResults([]);
        console.log("[Results] = ", results);
      })
      .catch((error) => {
        console.log("Error => ", error);
      });
  };

  return (
    <div className={classes.movies}>
      <div className={classes.search}>
        <i className="fas fa-search"></i>
        <input
          type="search"
          placeholder="Search A Movie "
          value={query}
          onChange={changeHandler}
          autoFocus
        />
      </div>
      <div className={classes.cards}>
        {results.length > 0 ? (
          results.map((elem) => {
            return <FilmCard key={elem.id} movie={elem} />;
          })
        ) : (
          <h4>Serach For A Movie!</h4>
        )}
      </div>
    </div>
  );
};

export default Movies;
