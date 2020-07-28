import React from "react";
import classes from "./Post.module.css";
import { withRouter } from "react-router";

const post = (props) => {
  console.log(props);
  return (
    <article className={classes.Post} onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default withRouter(post);
