import React from "react";
import classes from "./layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <div className={classes.left}></div>
      <div className={classes.middle}></div>
      <div className={classes.right}></div>
    </div>
  );
};

export default Layout;
