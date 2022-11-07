import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Reply = (props) => {
	const { username, text } = props;

	return (
		<ListItem disablePadding disableGutters>
			<ListItemAvatar sx={{ minWidth: "inherit", mr: 2 }}>
				<Avatar
					sx={{
						width: 24,
						height: 24,
					}}
					alt={username}
				/>
			</ListItemAvatar>
			<ListItemText
				primary={<Typography variant="subtitle1">{username}</Typography>}
				secondary={<Typography variant="subtitle2">{text}</Typography>}
			/>
		</ListItem>
	);
};

export default Reply;
