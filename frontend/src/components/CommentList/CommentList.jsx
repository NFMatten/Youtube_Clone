import React from "react";
import Comment from "../Comment/Comment";

const CommentList = (props) => {
  const { comments, getComments } = props;

  return (
    <div>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} getComments={getComments} />
      ))}
    </div>
  );
};

export default CommentList;
