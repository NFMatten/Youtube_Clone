import React from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const { videos, relatedVideos } = props;
  const selectedVideo = videos.filter(
    (video) => video.id.videoId === videoId
  )[0];
  console.log(selectedVideo);
  const { title, description } = selectedVideo.snippet;
  console.log(relatedVideos.length);
  return (
    <div>
      <VideoPlayer videoId={videoId} />
      <p>
        Title
        {title}
      </p>
      <p>
        Description
        {description}
      </p>
      <RelatedVideos relatedVideos={relatedVideos} />
    </div>
  );
};

export default VideoPage;
