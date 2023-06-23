import { useEffect, useRef, useState } from "react";

const useVideoController = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // This two functions act like a loop when the first component mounts
  // waits 10 seconds and then plays the video, after the video ends
  // it waits 20 seconds and then plays the video again

  const handleOnVideoEnded = () => {
    setIsPlaying(false);
    videoRef.current.load();

    setTimeout(() => {
      setIsPlaying(true);
      videoRef.current.play();
      ambientVideoRef.current.play();
    }, 20000);
  };

  useEffect(() => {
    const playingTime = setTimeout(() => {
      setIsPlaying(true);
    }, 10000);

    return () => {
      clearTimeout(playingTime);
    };
  }, []);

  return [videoRef, isPlaying, handleOnVideoEnded];
};

export default useVideoController;