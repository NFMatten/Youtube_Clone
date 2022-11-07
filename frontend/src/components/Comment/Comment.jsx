import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReplyForm from "../ReplyForm/ReplyForm";
import ReplyList from "../ReplyList/ReplyList";
import Button from "@mui/material/Button";
import useAuth from "../../hooks/useAuth";

const Comment = (props) => {
  const { id: commentId, text, likes, dislikes, getComments } = props;
  const { id: userId, username } = props.user;
  const { videoId } = useParams();

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replies, setReplies] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => getReplies(commentId), []);

  const toggleForm = () => setShowReplyForm(!showReplyForm);

  const addReply = async (replyObj) => {
    const finalReply = {
      user: userId,
      comment_id: commentId,
      ...replyObj,
    };

    try {
      console.log("Final Reply Object:", finalReply);
      const response = await axios.post(
        `http://localhost:8000/api/replies/${commentId}/`,
        finalReply,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 201) {
        toggleForm();
        getReplies(commentId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getReplies = async (commentId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/replies/${commentId}/`
      );
      if (response.status === 200) setReplies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const likeAction = async (commentId, likeAction) => {
    console.log(`CommentId: ${commentId} likeAction: ${likeAction}`);
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/comments/${commentId}/${likeAction}/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 204) getComments(videoId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>
        {commentId} - {username}
      </h4>
      <h4>{text}</h4>
      <div>
        <Button disabled={!user} onClick={() => likeAction(commentId, "like")}>
          Like {likes}
        </Button>
        <Button
          disabled={!user}
          onClick={() => likeAction(commentId, "dislike")}
        >
          Dislike {dislikes}
        </Button>
        {user && <Button onClick={toggleForm}>Reply</Button>}
      </div>
      {showReplyForm && <ReplyForm addReply={addReply} />}
      <div>
        <span>Replies ({replies.length ? replies.length : "0"})</span>
      </div>
      <div>
        <ReplyList replies={replies} />
      </div>
    </div>
  );
};

export default Comment;
