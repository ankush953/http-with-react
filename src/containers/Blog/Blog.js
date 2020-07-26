import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import classes from "./Blog.module.css";
import Axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "ankush",
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  render() {
    const posts = this.state.posts.map((post) => (
      <Post key={post.id} title={post.title} author={post.author} />
    ));
    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
