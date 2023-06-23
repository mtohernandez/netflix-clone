import {
  AmbientContainer,
  AmbientElement,
  AmbientVideo,
} from "../styled/Stylish/AmbientVideoBackground";

const BannerAmbient = (props) => {
  return (
    <AmbientContainer>
      <AmbientElement>
        <AmbientVideo
          ref={props.videoRef}
          src={props.videoUrl}
          poster={props.posterUrl}
          onEnded={props.handleVideoEnded}
          autoPlay={props.autoPlay}
          muted
        />
      </AmbientElement>
    </AmbientContainer>
  );
};

export default BannerAmbient;
