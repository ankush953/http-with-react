import React, { Component } from "react";
import classes from "./Blog.module.css";
import { Route } from "react-router";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <Link
                  to={{
                    pathname: "/",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
