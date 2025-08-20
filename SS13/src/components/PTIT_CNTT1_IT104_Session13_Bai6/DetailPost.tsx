import React, { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type Props = {
  post: Post;
};

export default class DetailPost extends Component<Props> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div style={{ marginBottom: "20px" }}>
        <p><b>Id:  {id}</b></p>
        <p><b>Title:  {title}</b></p>
        <p><b>Content: {content}</b></p>
        <p><b>Author: {author}</b></p>
        <hr />
      </div>
    );
  }
}
