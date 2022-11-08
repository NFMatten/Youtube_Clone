import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Typography from "@mui/material/Typography";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import useAuth from "../../hooks/useAuth";

const VideoPage = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const { videoId } = useParams();

  // eslint-disable-next-line
  const [user, token] = useAuth();

  useEffect(() => {
    fetchVideo(videoId);
    fetchRelatedVideos(videoId);
    getComments(videoId);
  }, [videoId]);

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
          headers: { Authorization: `Bearer ${token}` },
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
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideo = async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            id: videoId,
            part: "snippet,contentDetails,statistics",
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );

      if (response.status === 200) setVideo(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRelatedVideos = async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            relatedToVideoId: videoId,
            type: "video",
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.status === 200) setRelatedVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Grid container spacing={2} columnSpacing={12}>
        {video && (
          <>
            <Grid item xs={8} sm={8}>
              <Grid>
                <VideoPlayer videoId={videoId} />
                <Typography component="div" variant="h5">
                  {video.snippet.title}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary">
                  {video.snippet.description}
                </Typography>
              </Grid>
              <Grid>
                <CommentForm addComment={addComment} />
              </Grid>
              <Grid>
                <Typography variant="h4" mt={3}>
                  Comments
                </Typography>
                <CommentList comments={comments} getComments={getComments} />
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4}>
              <RelatedVideos relatedVideos={relatedVideos} />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default VideoPage;
