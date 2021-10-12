import React, { useContext } from "react";
import classes from "./favourite.module.css";
import { GlobalState } from "../../Context/globalState";
import FilmCard from "../../Components/film card/filmCard";

const Favourite = () => {
  const { watchList } = useContext(GlobalState);

  return (
    <div className={classes.favourite}>
      <h2>
        Watch List{" "}
        <span>
          {watchList.length} {watchList.length === 1 ? "Movie" : "Movies"}
        </span>
      </h2>
      <div className={classes.cards}>
        {watchList.length !== 0 ? (
          watchList.map((elem) => {
            return <FilmCard movie={elem} type="favourite" />;
          })
        ) : (
          <h4> Watch List is Empty, add some!</h4>
        )}
      </div>
    </div>
  );
};

export default Favourite;
