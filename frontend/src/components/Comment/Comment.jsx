import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReplyForm from "../ReplyForm/ReplyForm";
import ReplyList from "../ReplyList/ReplyList";
import useAuth from "../../hooks/useAuth";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Typography, Stack } from "@mui/material";
import {
	ExpandMore,
	ExpandLess,
	ThumbUp,
	ThumbDown,
} from "@mui/icons-material";

const Comment = (props) => {
	const { id: commentId, text, likes, dislikes, getComments } = props;
	const { id: userId, username } = props.user;
	const { videoId } = useParams();

	const [showReplyForm, setShowReplyForm] = useState(false);
	const [showReplies, setShowReplies] = useState(false);
	const [replies, setReplies] = useState([]);
	const [user, token] = useAuth();

	useEffect(() => getReplies(commentId), []);

	const toggleForm = () => setShowReplyForm(!showReplyForm);
	const toggleReplies = () => setShowReplies(!showReplies);

	const addReply = async (replyObj) => {
		const finalReply = {
			user: userId,
			comment_id: commentId,
			...replyObj,
		};

		try {
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
		<React.Fragment>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt={username} />
				</ListItemAvatar>
				<ListItemText
					primary={<Typography variant="h6">{username}</Typography>}
					secondary={
						<Stack
							component="span"
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
							}}
						>
							<Typography component="span" variant="body1">
								{text}
							</Typography>
							<Stack component="span" direction="row">
								<IconButton
									size="small"
									disabled={!user}
									onClick={() => likeAction(commentId, "like")}
								>
									<ThumbUp fontSize="small" sx={{ mr: 0.5 }} />
									<Typography>{likes}</Typography>
								</IconButton>
								<IconButton
									size="small"
									disabled={!user}
									onClick={() => likeAction(commentId, "dislike")}
								>
									<ThumbDown fontSize="small" sx={{ mr: 0.5 }} />
									<Typography>{dislikes}</Typography>
								</IconButton>
								{user && <Button onClick={toggleForm}>Reply</Button>}
							</Stack>
						</Stack>
					}
				/>
			</ListItem>
			<Stack sx={{ ml: 10 }}>
				{showReplyForm && <ReplyForm addReply={addReply} />}
				{replies.length > 0 && (
					<Button
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							width: "max-content",
						}}
						startIcon={showReplies ? <ExpandLess /> : <ExpandMore />}
						onClick={toggleReplies}
					>
						{replies.length} {replies.length === 1 ? "reply" : "replies"}
					</Button>
				)}
				{showReplies && <ReplyList replies={replies} />}
			</Stack>
			<Divider variant="inset" component="li" />
		</React.Fragment>
	);
};

export default Comment;
