import "./VideoItem.css";
import React from "react";

const VideoItem = ({video, onVideoSelect}) => {

  const onVideoChoice = () => {
    onVideoSelect (video);
  }

  return (
    <div className="video-item item" onClick={onVideoChoice}>
      <img
        alt="Thumbnail"
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;


