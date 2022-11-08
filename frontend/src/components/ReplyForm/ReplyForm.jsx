import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const ReplyForm = (props) => {
	const { addReply } = props;
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const handleSubmit = () => {
		const replyObj = { text: value };
		addReply(replyObj);
		setValue("");
	};

	return (
		<div>
			<TextField
				id="outlined-multiline-flexible"
				label="Reply"
				multiline
				maxRows={4}
				value={value}
				onChange={handleChange}
				fullWidth
				// margin="normal"
				sx={{ mb: 1 }}
			/>
			<Button
				sx={{ mb: 1 }}
				variant="contained"
				type="submit"
				onClick={handleSubmit}
			>
				Reply
			</Button>
		</div>
	);
};

export default ReplyForm;
