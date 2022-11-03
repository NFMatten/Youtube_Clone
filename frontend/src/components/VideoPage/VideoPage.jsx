import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Typography from "@mui/material/Typography";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const VideoPage = (props) => {
	const [comments, setComments] = useState([
		{
			user: "Super User",
			text: "this is a cool video",
		},
		{
			user: "Random User",
			text: "this is a NOT cool video",
		},
	]);
	const { videoId } = useParams();
	const { videos, relatedVideos } = props;
	const allVideos = [...videos, ...relatedVideos];
	const selectedVideo = allVideos.filter(
		(video) => video.id.videoId === videoId
	)[0];

	const { title, description } = selectedVideo.snippet;

	const addComment = (commentObj) => {
		setComments((prevState) => [commentObj, ...prevState]);
	};

	return (
		<Container>
			<Grid container spacing={2} columnSpacing={12}>
				<Grid item xs={8} sm={8} direction="row">
					<Grid zeroMinWidth>
						<VideoPlayer videoId={videoId} />
						<Typography component="div" variant="h5">
							{title}
						</Typography>
						<Typography noWrap variant="body2" color="text.secondary">
							{description}
						</Typography>
					</Grid>
					<Grid>
						<CommentForm addComment={addComment} />
					</Grid>
					<Grid>
						<h2>Comments</h2>
						<CommentList comments={comments} />
					</Grid>
				</Grid>

				<Grid item xs={4} sm={4}>
					<RelatedVideos relatedVideos={relatedVideos} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default VideoPage;
