import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Typography from "@mui/material/Typography";
import CommentForm from "../CommentForm/CommentForm";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const { videos, relatedVideos } = props;
  const selectedVideo = videos.filter(
    (video) => video.id.videoId === videoId
  )[0];

  const { title, description } = selectedVideo.snippet;

  return (
    <Grid container spacing={2}>
      <Grid item xs={8} sm={8} justifyContent={"center"} alignItems={"center"}>
        <VideoPlayer videoId={videoId} />
        <Typography component="div" variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Grid>
      <Grid item xs={4} sm={4}>
        <RelatedVideos relatedVideos={relatedVideos} />
      </Grid>
      <Grid>
        <CommentForm />
      </Grid>
    </Grid>
  );
};

export default VideoPage;
