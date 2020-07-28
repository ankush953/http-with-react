import React, { Component } from "react";
import Axios from "../../../axios";
import Post from "../../../components/Post/Post";
import classes from "./Posts.module.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);
    Axios.get("posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "ankush",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(() => this.setState({ error: true }));
  }

  selectedPostHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p>Something went wrong!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.selectedPostHandler(post.id)}
        />
      ));
    }
    return <section className={classes.Posts}>{posts}</section>;
  }
}

export default Posts;
