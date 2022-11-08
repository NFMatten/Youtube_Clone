import React from "react";

const VideoPlayer = (props) => {
	const { videoId } = props;
	return (
		<iframe
			title={videoId}
			id="ytplayer"
			type="text/html"
			width="640"
			height="360"
			src={`http://www.youtube.com/embed/${videoId}?autoplay=0`}
			frameBorder="0"
		></iframe>
	);
};

export default VideoPlayer;
