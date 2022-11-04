import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Typography from "@mui/material/Typography";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const VideoPage = (props) => {
  const [comments, setComments] = useState([]);
  const { videoId } = useParams();
  const [user, token] = useAuth();
  const { videos, relatedVideos } = props;
  const allVideos = [...videos, ...relatedVideos];
  const selectedVideo = allVideos.filter(
    (video) => video.id.videoId === videoId
  )[0];

  const { title, description } = selectedVideo.snippet;

  const addComment = async (commentObj) => {
    const finalComment = {
      video_id: videoId,
      likes: 0,
      dislikes: 0,
      ...commentObj,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/comments/",
        finalComment,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      if (response.status === 201) getComments(videoId);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getComments = async (videoId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/comments/?video_id=${videoId}`
      );
      setComments(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
		getComments(videoId);
	}, [videoId]);

  return (
    <Container>
      <Grid container spacing={2} columnSpacing={12}>
        <Grid item xs={8} sm={8}>
          <Grid>
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
