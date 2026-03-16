import ReactPlayer from 'react-player/youtube';

const TrailerPlayer = ({
  videoKey,
  playing = false,
  muted = true,
  onEnded,
  onReady,
  className = '',
  style = {},
}) => {
  if (!videoKey) return null;

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoKey}`}
        playing={playing}
        muted={muted}
        controls={false}
        onEnded={onEnded}
        onReady={onReady}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1.3)' }}
        config={{
          youtube: {
            playerVars: {
              autoplay: playing ? 1 : 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              disablekb: 1,
              fs: 0,
              cc_load_policy: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default TrailerPlayer;
