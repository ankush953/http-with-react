import React, { Component } from "react";
import classes from "./Blog.module.css";
import { Route } from "react-router";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Exact match - Home</h1>}/>
<Route path="/" render={() => <h1>matching initial - new Post</h1>} />
      </div>
    );
  }
}

export default Blog;
