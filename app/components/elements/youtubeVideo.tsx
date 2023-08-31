import Image from "next/image";

import { useState } from "react";
import { LuYoutube } from "react-icons/lu";

type VideoProps = {
  id: string;
};

const YouTubeVideo: React.FC<VideoProps> = ({ id }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {showVideo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Youtube video"
          className="h-full w-full rounded-lg select-none"
        />
      ) : (
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="group relative h-full w-full"
        >
          <Image
            src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt="Youtube video thumbnail"
            fill={true}
            className="h-full w-full object-fill rounded-lg select-none"
          />
          <div className="relative grid place-items-center text-xl text-white opacity-90">
            <LuYoutube className="h-20 w-20 rounded-full border-2 border-black bg-red-600 p-4" />
          </div>
        </button>
      )}
    </>
  );
};

export default YouTubeVideo;
