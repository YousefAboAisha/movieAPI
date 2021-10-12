import React, { useEffect, useState } from "react";
import classes from "./trending.module.css";
import FilmCard from "../../Components/film card/filmCard";

const Trending = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US&page=1`
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
  }, []);

  return (
    <div className={classes.trending}>
      <h2>Trending</h2>
      <div className={classes.cards}>
        {results.length > 0
          ? results.map((elem) => {
              return <FilmCard key={elem.id} movie={elem} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Trending;
