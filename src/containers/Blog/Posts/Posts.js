import React, { Component } from "react";
import Axios from "../../../axios";
import Post from "../../../components/Post/Post";
import classes from "./Posts.module.css";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

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
    console.log(this.props);
    this.props.history.push({ pathname: "/posts/" + id });
  };

  render() {
    let posts = <p>Something went wrong!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        // <Link to={"/" + post.id} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.selectedPostHandler(post.id)}
        />
        // </Link>
      ));
    }
    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <Route path={this.props.match.url + "/:id"} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
