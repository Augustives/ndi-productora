import React from "react";

const YouTubeVideo = ({ videoId }) => {
  const aspectRatio = 560 / 315; // Aspect ratio of the video (width / height)

  const getVideoDimensions = () => {
    const containerWidth = window.innerWidth * 0.8; // Adjust the percentage as needed
    const containerHeight = containerWidth / aspectRatio;
    return {
      width: containerWidth,
      height: containerHeight,
    };
  };

  const { width, height } = getVideoDimensions();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: `${(1 / aspectRatio) * 100}%`,
      }}
    >
      <iframe
        title="YouTube Video"
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
};

export default YouTubeVideo;
