import React from "react";

const Reply = (props) => {
	const { username, text } = props;

	return (
		<li>
			{username} - {text}
		</li>
	);
};

export default Reply;
