import React from "react";

const Comment = (props) => {
  const {
    user: { username },
    text,
  } = props;
  return (
    <div>
      <h4>{username}</h4>
      <h4>{text}</h4>
    </div>
  );
};

export default Comment;
