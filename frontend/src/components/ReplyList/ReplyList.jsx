import React from "react";
import Reply from "../Reply/Reply";
import List from "@mui/material/List";

const ReplyList = (props) => {
	const { replies } = props;

	return (
		<List dense>
			{replies.map(({ id, user: { username }, text }) => (
				<Reply key={id} username={username} text={text} />
			))}
		</List>
	);
};

export default ReplyList;
