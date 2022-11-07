import React from "react";
import Comment from "../Comment/Comment";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

const CommentList = (props) => {
	const { comments, getComments } = props;

	return (
		<>
			{comments.length > 0 ? (
				<List>
					{comments.map((comment) => (
						<Comment {...comment} key={comment.id} getComments={getComments} />
					))}
				</List>
			) : (
				<Typography variant="h6">0 comments</Typography>
			)}
		</>
	);
};

export default CommentList;
