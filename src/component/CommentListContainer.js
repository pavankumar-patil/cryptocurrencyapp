import React from 'react';
export default class CommentListContainer extends React.Component {
  state = { comments: [] };
  constructor() {
    super();
  //  this
  }
  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return (
      <ul>
        {this.state.comments.map(c => (
          <li>{c.body}—{c.author}</li>
        ))}
      </ul>
    );
  }
}

// This is just a placeholder for a real request
const fetchSomeComments = cb =>
  cb([
    { author: "Chan", body: "You look nice today." },
    { author: "You", body: "I know, right?!" }
  ]);
