import React from "react";
import Comment from "../Comment/Comment";

const CommentList = (props) => {
	const { comments } = props;

	return (
		<div>
			{comments.map((comment) => (
				<Comment {...comment} />
			))}
		</div>
	);
};

export default CommentList;
