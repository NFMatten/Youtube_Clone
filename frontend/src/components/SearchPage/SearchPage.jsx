import React from "react";
import { Container, Stack, ListItem } from "@mui/material";

const SearchPage = (props) => {
	const { videos } = props;
	return (
		<Container>
			<Stack direction="row" spacing={2}>
				<ListItem>
					<iframe
						title="M7lc1UVf-VE"
						id="ytplayer"
						type="text/html"
						width="320"
						height="180"
						src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0"
						frameborder="0"
					></iframe>
				</ListItem>
				<ListItem>
					{" "}
					<iframe
						title="M7lc1UVf-VE"
						id="ytplayer"
						type="text/html"
						width="320"
						height="180"
						src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0"
						frameborder="0"
					></iframe>
				</ListItem>
				<ListItem>
					{" "}
					<iframe
						title="M7lc1UVf-VE"
						id="ytplayer"
						type="text/html"
						width="320"
						height="180"
						src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0"
						frameborder="0"
					></iframe>
				</ListItem>
			</Stack>
		</Container>
	);
};

export default SearchPage;
