import * as React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

const RelatedVideos = (props) => {
	const { relatedVideos } = props;

	return (
		<Grid>
			{relatedVideos.map((video) => (
				<Card key={video.id.videoId} sx={{ marginBottom: "10px" }}>
					<CardActionArea
						sx={{ display: "flex" }}
						component={Link}
						to={`/video/${video.id.videoId}`}
					>
						<Box sx={{ display: "flex", flexDirection: "row" }}>
							<CardContent sx={{ flex: "0" }} zeroMinWidth>
								<div
									style={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										width: "11rem",
									}}
								>
									<Typography
										noWrap
										component="div"
										variant="body1"
										sx={{ overflow: "hidden" }}
									>
										{video.snippet.title}
									</Typography>
								</div>
							</CardContent>
							<CardMedia
								component="img"
								sx={{
									width: video.snippet.thumbnails.default.width,
									flex: "1",
								}}
								image={video.snippet.thumbnails.default.url}
								alt="Live from space album cover"
							/>
						</Box>
					</CardActionArea>
				</Card>
			))}
		</Grid>
	);
};

export default RelatedVideos;
