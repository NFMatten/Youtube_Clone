import React from "react";

const Comment = (props) => {
	const { user, text } = props;
	return (
		<div>
			<h4>{user}</h4>
			<h4>{text}</h4>
		</div>
	);
};

export default Comment;
