import React, { useEffect, useState } from "react";
import classes from "./comments.module.css";
import Comment from "../../Components/comment/comment";
import axios from "axios";

const Comments = (props) => {
  const names = [
    "Harry",
    "Ross",
    "Bruce",
    "Cook",
    "Carolyn",
    "Morgan",
    "Albert",
    "Walker",
    "Randy",
    "Reed",
    "Larry",
    "Barnes",
    "Lois",
    "Wilson",
    "Jesse",
    "Campbell",
    "Ernest",
    "Rogers",
    "Theresa",
    "Patterson",
    "Henry",
    "Simmons",
    "Michelle",
    "Perry",
    "Frank",
    "Butler",
    "Shirley",
  ];

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState("false");
  const [fetchedComments, setFetchedComments] = useState([]);

  const clearInput = () => {
    setComment("");
  };

  const commentHandler = (e) => {
    e.preventDefault();
    clearInput();
    setLoading(true);

    const date =
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

    const data = { comment, date };

    axios
      .post(
        "https://portfolio-fc720-default-rtdb.firebaseio.com/Comments.json",
        data
      )
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get("https://portfolio-fc720-default-rtdb.firebaseio.com/Comments.json")
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.unshift(res.data[key]);
        }
        setFetchedComments(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [fetchedComments]);

  let message = (
    <>
      {fetchedComments.reverse().map((elem) => {
        return (
          <Comment
            key={elem.date}
            msg={elem.comment}
            date={elem.date}
            name={
              names[Math.floor(Math.random() * names.length)] +
              " " +
              names[Math.floor(Math.random() * names.length)]
            }
          />
        );
      })}
    </>
  );

  return (
    <div>
      <h2 className={classes.heading}>Comments </h2>
      <div className={classes.box}>
        <textarea
          placeholder="Add Comment"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className={classes.btn}>
          <button
            disabled={comment.trim() === "" ? true : false}
            onClick={commentHandler}
          >
            {loading ? "Loading..." : "Post"}
          </button>
          <button onClick={clearInput}>Cancel</button>
        </div>
        {message}
      </div>
    </div>
  );
};

export default Comments;
