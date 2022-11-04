import React from "react";
import Comment from "../Comment/Comment";

const CommentList = (props) => {
  const { comments } = props;

  return (
    <div>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentList;
