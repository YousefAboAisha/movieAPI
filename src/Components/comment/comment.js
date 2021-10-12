import React, { useEffect, useState } from "react";
import classes from "./comment.module.css";

const Comment = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(props.name);
  }, []);

  return (
    <div className={classes.msg}>
      <div className={classes.left}>
        <img
          src="https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1018631086.jpg"
          alt="Avatar"
        />
        <h5>{name}</h5>
      </div>

      <p>{props.msg}</p>

      <span> {props.date} </span>
    </div>
  );
};

export default Comment;
