import React from "react";

const CommentDetails = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" /></a>
      <div className="content">
              <a href="/" className="author">{props.author}</a>
        <div className="metadata">
                  <span className="date"> {props.time}</span>
        </div>
        <div className="text"> Nice blog post! </div>
      </div>{" "}
    </div>
  );
};

export default CommentDetails;
