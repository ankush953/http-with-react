import React, { Component } from "react";

import "./FullPost.css";
import Axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.state.loadedPost);
      this.loadData();
    }
  }

  componentDidUpdate() {
    this.loadData();
  }

  deletePostHandler = () => {
    Axios.delete("posts/" + this.props.match.params.id).then(
      (response) => response
    );
  };

  loadData() {
    if (
      !this.state.loadedPost ||
      this.state.loadedPost.id != this.props.match.params.id
    ) {
      Axios.get("posts/" + this.props.match.params.id).then((response) => {
        this.setState({ loadedPost: response.data });
      });
    }
  }

  render() {
    // console.log(this.props);
    let post = <p>Please select a Post!</p>;
    if (this.props.match.params.id) {
      if (this.state.loadedPost) {
        post = (
          <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
            <div className="Edit">
              <button className="Delete" onClick={this.deletePostHandler}>
                Delete
              </button>
            </div>
          </div>
        );
      }
    }

    return post;
  }
}

export default FullPost;
